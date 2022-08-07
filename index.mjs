import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const runRaffle = async (numTickets) => { //The number of participants in the raffle is assumed to be equal to the number of tickets
  const startingBalanceA = stdlib.parseCurrency(1000);
  const startingBalanceB = stdlib.parseCurrency(100);

  console.log(`*     Creating the Alice Account     *`);

  const accAlice = await stdlib.newTestAccount(startingBalanceA);
  const ctcAlice = accAlice.contract(backend);

  console.log(`*     Creating the Bob Accounts     *`);

  const accBobs = await stdlib.newTestAccounts(numTickets, startingBalanceB);
  const ctcBobs = accBobs.map(B => B.contract(backend, ctcAlice.getInfo()));
  
  const fmt = (amt) => stdlib.formatCurrency(amt, 2)
  // creating a new token
  const NFT = await stdlib.launchToken(accAlice,'Wukong','NFT',{supply: 1});
  const NFTID = NFT.id;
  accBobs.map(B => B.tokenAccept(NFTID));
  const params = {
    nftId: NFTID,
    ticketAmount: numTickets
  };

  const ticketsPicked = new Map();
  const ticketsArr = Array.from({length: numTickets}, (_, i) => i + 1);
  console.log(ticketsArr);
  

  const printBalances = async (numBobs) => {
    const printBalance = async (name, acc) => {
        const [balance, balance_NFT] = await stdlib.balancesOf(acc,[null, NFTID]);
        console.log(`  [+] ${name} has ${fmt(balance)} ${stdlib.standardUnit} and ${balance_NFT} Wukong `);
    } 
    await printBalance('Alice', accAlice);
    for (let i = 0; i < numBobs; i++) {
        await printBalance(`Bob #${i+1}`, accBobs[i]);
    }
  }

  console.log("Starting balances:");
  await printBalances(numTickets);

  const giveTicketsFun = async () => {
    var numTicketsArr = numTickets;
    for(const [i, ctc] of ctcBobs.entries()) {
      const randomIndex = Math.floor(Math.random() * numTicketsArr)
      const randomTicket = ticketsArr[randomIndex];
      try{
          if(ticketsArr.length > 0){
              await ctc.apis.Bob.getTicket(randomTicket);

              ticketsPicked.set(randomTicket,i);
              numTicketsArr = numTicketsArr - 1;
              ticketsArr.splice(`${randomTicket}`,1);

              console.log(`Bob #${i+1} picked ticket number ${randomTicket}`);

          } else {
            console.log(`All the tickets are picked for the Raffle.`);
          }
      } catch(e) {
        console.log(e);
      }
    }
  }

  const checkWinFun = async () => {
    for(const [i, ctc] of ctcBobs.entries()){
      try {
        const isWinner = await ctc.apis.Bob.seeWinner();
        if(isWinner){
          console.log(`Bob #${i} has won the Raffle`);
        } else {
          console.log(`Better luck next time Bob #${i+1}`);
        }
      } catch(e) {
        console.log(e);
      }
    }
    console.log("Balances after Raffle:");
    await printBalances(numTickets);
  }

  // launch Contract
  console.log(`Starting Raffle...`)
  await ctcAlice.p.Alice({
    ...stdlib.hasRandom,
    getTicket: () => {
      const ticket = (Math.floor(Math.random() * numTickets) + 1);
      return ticket;
    },
    setParams: () => {
      console.log(`Started raffle with the parameters ${JSON.stringify(params)}`)
      return params;
    },
    seeHash: (hash) => {
      console.log(`\nThe winning ticket number Hash is ${hash}\n`);
    },
    giveTickets: () => {
      giveTicketsFun();
    },
    showWinningNum: (num) => {
      console.log(`\nThe winning ticket number is ${parseInt(num)}\n`);
    },
    checkWin: () => {
      checkWinFun();
    },
    showOutcome: (ticket) => {
      console.log(ticketsPicked.get(ticket));
      console.log(`\nBob #${ticketsPicked.get(`${ticket}`)} won the Raffle with ticket number ${ticket}`);
    }
  });
}

await runRaffle(10);