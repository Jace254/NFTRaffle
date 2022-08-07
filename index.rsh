'reach 0.1';

const amt = 1;
const duration = 200;

const [ isOutcome, BLOSE, BWIN ] = makeEnum(2);
const outcome = (BTicket, WTicket) => ((BTicket == WTicket) ? 1 : 0)

forall(UInt, BTicket =>
  forall(UInt, WTicket => 
    assert(isOutcome(outcome(BTicket,WTicket)))));

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...hasRandom,
    getTicket: Fun([UInt], UInt),
    setParams: Fun([],Object({
      nftId: Token,
      ticketAmount: UInt,
    })),
    seeHash: Fun([Digest], Null),
    giveTickets: Fun([], Null),
    showWinningNum: Fun([UInt], Null),
    checkWin: Fun([], Null),
    showOutcome: Fun([UInt], Null),
  });
  const B = API('Bob', {
    // Specify Bob's interact interface here
    getTicket: Fun([UInt], Null),
    seeWinner: Fun([], Bool),
  });
  init();

  A.only(() => {
    const { nftId, ticketAmount } = declassify(interact.setParams());
    const _winningTicket = interact.getTicket(ticketAmount);
    const [_commitA, _saltA] = makeCommitment(interact, _winningTicket);
    const commitA = declassify(_commitA)
  });

  A.publish(nftId, ticketAmount, commitA);
  A.interact.seeHash(commitA);
  commit();
  A.pay([[amt, nftId]]);
  A.interact.giveTickets();

  const pickedTickets = new Map(Address,UInt);

  const [ticketsPicked] =
    parallelReduce([ 0 ])
    .invariant(balance(nftId) == amt && balance() == 0)
    .invariant(ticketsPicked <= ticketAmount)
    .while(ticketsPicked < ticketAmount )
    .api_(B.getTicket, (ticket) => {
      return [ 0, (k) => {
        k(null);
        pickedTickets[this] = ticket;
        return [ticketsPicked + 1]
      }]
    })
    .timeout(false)
  
  commit();
  A.only(() => {
    const saltA = declassify(_saltA);
    const winningTicket = declassify(_winningTicket);
  });
  A.publish(saltA, winningTicket);
  checkCommitment(commitA, saltA, winningTicket);
  A.interact.showWinningNum(winningTicket);
  A.interact.checkWin();


  const [winner, remainingB ] = 
    parallelReduce([ A, ticketsPicked ])
    .invariant(balance(nftId) == amt && balance() == 0)
    .invariant(remainingB <= ticketsPicked)
    .while(remainingB > 0)
    .api(B.seeWinner, 
      (k) => {
        const BTicket = fromSome(pickedTickets[this],0);
        assert(outcome(BTicket,winningTicket) == BWIN ||
              outcome(BTicket,winningTicket) == BLOSE);

        if(outcome(BTicket,winningTicket) == BWIN){

          k(true);
          delete pickedTickets[this];
          return [this, remainingB -1];

        } else {

          k(false);
          delete pickedTickets[this];
          return [ winner, remainingB -1 ];

        }
      })

  transfer(amt,nftId).to(winner);
  A.interact.showOutcome(winningTicket);
  commit();
  exit();
});
