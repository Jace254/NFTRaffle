import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());


console.log(`Alice is launching the NFT`);
const JSH = await stdlib.launchToken(accAlice, 'Josh', 'NFT', {supply: 1});
const nftParams = {
  NFT: JSH.id,
  ticketAmount: 20,
}
const OUTCOME = ["Bob's number is not a match :( ","Bob's number matches ! "]
await accBob.tokenAccept(JSH.id);

const Shared = {
  getTicket: (ticketNum) => {
    const ticket = (Math.floor(Math.random() * ticketNum) + 1);
    return ticket;
  },
  showOutcome: (outcome) => {
    console.log(OUTCOME[outcome]);
  }
}

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ...Shared,
    setParams: () => {
      return nftParams;
    },
    seeHash: (value) => {
      console.log(`The winning ticket HASH is ${value}`)
    }
    // implement Alice's interact object here
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...Shared,
    showTicket: (BTicket) => {
      console.log(`Bob picked Ticket number #${BTicket}`);
    },
    seeWinner: (ticket) => {
      console.log(`The winning ticket is Ticket number #${ticket}`)
    }
    // implement Bob's interact object here
  }),
]);

console.log('Goodbye, Alice and Bob!');
