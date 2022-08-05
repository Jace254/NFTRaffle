'reach 0.1';

const amt = 1;

const Shared = {
  showOutcome: Fun([UInt], Null),
}

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...hasRandom,
    getTicket: Fun([UInt], UInt),
    setParams: Fun([],Object({
      NFT: Token,
      ticketAmount: UInt,
    })),
    seeHash: Fun([Digest], Null),
  });
  const B = API('Bob', {
    // Specify Bob's interact interface here
    showTicket: Fun([UInt], Null),
    seeWinner: Fun([UInt], Null),
    showOutcome: Fun([UInt], Null),
  });
  init();
  A.only(() => {
    const { NFT, ticketAmount } = declassify(interact.setParams());
    const _winningTicket = interact.getTicket(ticketAmount);
    const [_commitA, _saltA] = makeCommitment(interact, _winningTicket);
    const commitA = declassify(_commitA)
  });
  // The first one to publish deploys the contract
  A.publish(NFT, ticketAmount, commitA);
  A.interact.seeHash(commitA)
  commit();
  A.pay([[amt, NFT]]);
  commit();

  const pickedTickets = new Map(Address, UInt);

  const [[ticketAmount], k ] = call(B.getTicket)

  // const [ ticket,ticketsPicked,isPicking] =
  //   parallelReduce([ 0, 0, true ])
  //     .invariant(ticketsPicked <= ticketAmount)
  //     .while(ticketsPicked < ticketAmount && isPicking)
  //     .api_(B.getTicket, (amt) => {
  //       check(!pickedTickets.member())
  //       return [ 0, (k) => {
  //         k(ticket);
  //         require(!pickedTickets.member(this,ticket));

  //         return [ticket, ticketsPicked + 1, true]
  //       }]
  //     })
  //      .timeout(DEADLINE, () => {
  //        TIMEOUT_BLOCK
  //      });
  unknowable(B, A(_winningTicket, _saltA));

  B.only(() => {
    const BTicket = declassify(interact.getTicket(ticketAmount));
    interact.showTicket(BTicket);
  })
  // The second one to publish always attaches
  B.publish(BTicket);
  commit();

  A.only(() => {
    const saltA = declassify(_saltA);
    const winningTicket = declassify(_winningTicket);
  });
  A.publish(saltA, winningTicket);
  checkCommitment(commitA, saltA, winningTicket);

  B.interact.seeWinner(winningTicket);

  const outcome = BTicket == winningTicket ? 1 : 0;

  transfer([[amt,NFT]]).to(outcome == 0 ? A : B);
  each([A, B], () => interact.showOutcome(outcome));

  commit();
  // write your program here
  exit();
});
