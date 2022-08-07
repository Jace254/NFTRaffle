// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc2
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3],
      3: [ctc0, ctc1, ctc3, ctc2],
      6: [ctc0, ctc1, ctc2, ctc2],
      7: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    NFT: ctc3,
    ticketAmount: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v313 = stdlib.protect(ctc4, await interact.setParams(), {
    at: './index.rsh:36:64:application',
    fs: ['at ./index.rsh:35:9:application call to [unknown function] (defined at: ./index.rsh:35:13:function exp)'],
    msg: 'setParams',
    who: 'Alice'
    });
  const v314 = v313.NFT;
  const v315 = v313.ticketAmount;
  const v318 = stdlib.protect(ctc1, await interact.getTicket(v315), {
    at: './index.rsh:37:46:application',
    fs: ['at ./index.rsh:35:9:application call to [unknown function] (defined at: ./index.rsh:35:13:function exp)'],
    msg: 'getTicket',
    who: 'Alice'
    });
  const v319 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:38:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:35:9:application call to [unknown function] (defined at: ./index.rsh:35:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v320 = stdlib.digest(ctc5, [v319, v318]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v314, v315, v320],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:42:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v323, v324, v325], secs: v327, time: v326, didSend: v51, from: v322 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v323
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v323, v324, v325], secs: v327, time: v326, didSend: v51, from: v322 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.seeHash(v325), {
    at: './index.rsh:43:21:application',
    fs: ['at ./index.rsh:43:21:application call to [unknown function] (defined at: ./index.rsh:43:21:function exp)', 'at ./index.rsh:43:21:application call to "liftedInteract" (defined at: ./index.rsh:43:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v322, v323, v324, v325],
    evt_cnt: 0,
    funcNum: 1,
    lct: v326,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'), v323]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v338, time: v337, didSend: v62, from: v336 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v323
        });
      
      const v350 = true;
      const v351 = stdlib.checkedBigNumberify('./index.rsh:51:22:decimal', stdlib.UInt_max, '0');
      const v352 = v337;
      
      if (await (async () => {
        const v367 = stdlib.lt(v351, v324);
        const v368 = v367 ? v350 : false;
        
        return v368;})()) {
        const v375 = stdlib.add(v352, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '200'));
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v338, time: v337, didSend: v62, from: v336 } = txn2;
  ;
  ;
  const v348 = stdlib.addressEq(v322, v336);
  stdlib.assert(v348, {
    at: './index.rsh:45:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.giveTickets(), {
    at: './index.rsh:46:25:application',
    fs: ['at ./index.rsh:46:25:application call to [unknown function] (defined at: ./index.rsh:46:25:function exp)', 'at ./index.rsh:46:25:application call to "liftedInteract" (defined at: ./index.rsh:46:25:application)'],
    msg: 'giveTickets',
    who: 'Alice'
    });
  
  let v350 = true;
  let v351 = stdlib.checkedBigNumberify('./index.rsh:51:22:decimal', stdlib.UInt_max, '0');
  let v352 = v337;
  
  while (await (async () => {
    const v367 = stdlib.lt(v351, v324);
    const v368 = v367 ? v350 : false;
    
    return v368;})()) {
    const v375 = stdlib.add(v352, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '200'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: ['time', v375],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v322, v323, v324, v325, v351, v375],
        evt_cnt: 0,
        funcNum: 7,
        lct: v352,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:63:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v405, time: v404, didSend: v146, from: v403 } = txn4;
          
          ;
          const cv350 = false;
          const cv351 = v351;
          const cv352 = v404;
          
          await (async () => {
            const v350 = cv350;
            const v351 = cv351;
            const v352 = cv352;
            
            if (await (async () => {
              const v367 = stdlib.lt(v351, v324);
              const v368 = v367 ? v350 : false;
              
              return v368;})()) {
              const v375 = stdlib.add(v352, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '200'));
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc8, ctc3, ctc1, ctc6, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v405, time: v404, didSend: v146, from: v403 } = txn4;
      ;
      const v406 = stdlib.addressEq(v322, v403);
      stdlib.assert(v406, {
        at: './index.rsh:63:9:dot',
        fs: ['at ./index.rsh:62:41:application call to [unknown function] (defined at: ./index.rsh:62:41:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv350 = false;
      const cv351 = v351;
      const cv352 = v404;
      
      v350 = cv350;
      v351 = cv351;
      v352 = cv352;
      
      continue;
      }
    else {
      const {data: [v387], secs: v389, time: v388, didSend: v115, from: v386 } = txn3;
      undefined /* setApiDetails */;
      const v391 = v387[stdlib.checkedBigNumberify('./index.rsh:55:10:spread', stdlib.UInt_max, '0')];
      ;
      const v394 = null;
      await txn3.getOutput('Bob_getTicket', 'v394', ctc0, v394);
      await stdlib.mapSet(map0, v386, v391);
      const v401 = stdlib.add(v351, stdlib.checkedBigNumberify('./index.rsh:59:33:decimal', stdlib.UInt_max, '1'));
      const cv350 = true;
      const cv351 = v401;
      const cv352 = v388;
      
      v350 = cv350;
      v351 = cv351;
      v352 = cv352;
      
      continue;}
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v322, v323, v325, v351, v319, v318],
    evt_cnt: 2,
    funcNum: 3,
    lct: v352,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v412, v413], secs: v415, time: v414, didSend: v157, from: v411 } = txn3;
      
      ;
      
      const v420 = v351;
      const v421 = v322;
      const v422 = v414;
      
      if (await (async () => {
        const v437 = stdlib.gt(v420, stdlib.checkedBigNumberify('./index.rsh:81:25:decimal', stdlib.UInt_max, '0'));
        
        return v437;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v421,
          tok: v323
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v323
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc6, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v412, v413], secs: v415, time: v414, didSend: v157, from: v411 } = txn3;
  ;
  const v416 = stdlib.addressEq(v322, v411);
  stdlib.assert(v416, {
    at: './index.rsh:72:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v417 = stdlib.digest(ctc5, [v412, v413]);
  const v418 = stdlib.digestEq(v325, v417);
  stdlib.assert(v418, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:73:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.checkWin(), {
    at: './index.rsh:74:22:application',
    fs: ['at ./index.rsh:74:22:application call to [unknown function] (defined at: ./index.rsh:74:22:function exp)', 'at ./index.rsh:74:22:application call to "liftedInteract" (defined at: ./index.rsh:74:22:application)'],
    msg: 'checkWin',
    who: 'Alice'
    });
  
  let v420 = v351;
  let v421 = v322;
  let v422 = v414;
  
  while (await (async () => {
    const v437 = stdlib.gt(v420, stdlib.checkedBigNumberify('./index.rsh:81:25:decimal', stdlib.UInt_max, '0'));
    
    return v437;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v444], secs: v446, time: v445, didSend: v204, from: v443 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v448 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v443), null);
    const v449 = stdlib.fromSome(v448, stdlib.checkedBigNumberify('./index.rsh:84:54:decimal', stdlib.UInt_max, '0'));
    const v450 = stdlib.eq(v449, v413);
    const v451 = v450 ? stdlib.checkedBigNumberify('./index.rsh:7:63:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:7:67:decimal', stdlib.UInt_max, '0');
    const v452 = stdlib.eq(v451, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v452) {
      const v460 = true;
      await txn4.getOutput('Bob_seeWinner', 'v460', ctc10, v460);
      await stdlib.mapSet(map0, v443, undefined /* Nothing */);
      const v466 = stdlib.sub(v420, stdlib.checkedBigNumberify('./index.rsh:92:37:decimal', stdlib.UInt_max, '1'));
      const cv420 = v466;
      const cv421 = v443;
      const cv422 = v445;
      
      v420 = cv420;
      v421 = cv421;
      v422 = cv422;
      
      continue;}
    else {
      const v471 = false;
      await txn4.getOutput('Bob_seeWinner', 'v471', ctc10, v471);
      await stdlib.mapSet(map0, v443, undefined /* Nothing */);
      const v477 = stdlib.sub(v420, stdlib.checkedBigNumberify('./index.rsh:98:36:decimal', stdlib.UInt_max, '1'));
      const cv420 = v477;
      const cv421 = v322;
      const cv422 = v445;
      
      v420 = cv420;
      v421 = cv421;
      v422 = cv422;
      
      continue;}
    
    }
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v421), {
    at: './index.rsh:104:25:application',
    fs: ['at ./index.rsh:104:25:application call to [unknown function] (defined at: ./index.rsh:104:25:function exp)', 'at ./index.rsh:104:25:application call to "liftedInteract" (defined at: ./index.rsh:104:25:application)'],
    msg: 'showOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  };
export async function _Bob_getTicket7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_getTicket7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_getTicket7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v322, v323, v324, v325, v351, v375] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1]);
  const v379 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:55:33:application call to [unknown function] (defined at: ./index.rsh:55:33:function exp)', 'at ./index.rsh:55:33:application call to [unknown function] (defined at: ./index.rsh:55:33:function exp)'],
    msg: 'in',
    who: 'Bob_getTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v322, v323, v324, v325, v351, v375, v379],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v387], secs: v389, time: v388, didSend: v115, from: v386 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_getTicket"
        });
      const v391 = v387[stdlib.checkedBigNumberify('./index.rsh:55:10:spread', stdlib.UInt_max, '0')];
      ;
      const v394 = null;
      const v395 = await txn1.getOutput('Bob_getTicket', 'v394', ctc0, v394);
      
      await stdlib.simMapSet(sim_r, 0, v386, v391);
      const v401 = stdlib.add(v351, stdlib.checkedBigNumberify('./index.rsh:59:33:decimal', stdlib.UInt_max, '1'));
      const v812 = v401;
      const v814 = stdlib.lt(v401, v324);
      if (v814) {
        const v816 = stdlib.add(v388, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '200'));
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v387], secs: v389, time: v388, didSend: v115, from: v386 } = txn1;
  undefined /* setApiDetails */;
  const v391 = v387[stdlib.checkedBigNumberify('./index.rsh:55:10:spread', stdlib.UInt_max, '0')];
  ;
  const v394 = null;
  const v395 = await txn1.getOutput('Bob_getTicket', 'v394', ctc0, v394);
  if (v115) {
    stdlib.protect(ctc0, await interact.out(v387, v395), {
      at: './index.rsh:55:11:application',
      fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:11:function exp)', 'at ./index.rsh:57:10:application call to "k" (defined at: ./index.rsh:56:23:function exp)', 'at ./index.rsh:56:23:application call to [unknown function] (defined at: ./index.rsh:56:23:function exp)'],
      msg: 'out',
      who: 'Bob_getTicket'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v386, v391);
  const v401 = stdlib.add(v351, stdlib.checkedBigNumberify('./index.rsh:59:33:decimal', stdlib.UInt_max, '1'));
  const v812 = v401;
  const v814 = stdlib.lt(v401, v324);
  if (v814) {
    const v816 = stdlib.add(v388, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '200'));
    return;
    }
  else {
    return;
    }
  
  
  };
export async function _Bob_seeWinner6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_seeWinner6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_seeWinner6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v322, v323, v413, v420] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc4, ctc1, ctc1]);
  const v440 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:9:function exp)', 'at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:9:function exp)'],
    msg: 'in',
    who: 'Bob_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v322, v323, v413, v420, v440],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v444], secs: v446, time: v445, didSend: v204, from: v443 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_seeWinner"
        });
      ;
      const v448 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v443), null);
      const v449 = stdlib.fromSome(v448, stdlib.checkedBigNumberify('./index.rsh:84:54:decimal', stdlib.UInt_max, '0'));
      const v450 = stdlib.eq(v449, v413);
      const v451 = v450 ? stdlib.checkedBigNumberify('./index.rsh:7:63:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:7:67:decimal', stdlib.UInt_max, '0');
      const v452 = stdlib.eq(v451, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v452) {
        const v460 = true;
        const v461 = await txn1.getOutput('Bob_seeWinner', 'v460', ctc6, v460);
        
        await stdlib.simMapSet(sim_r, 0, v443, undefined /* Nothing */);
        const v466 = stdlib.sub(v420, stdlib.checkedBigNumberify('./index.rsh:92:37:decimal', stdlib.UInt_max, '1'));
        const v846 = v466;
        const v849 = stdlib.gt(v466, stdlib.checkedBigNumberify('./index.rsh:81:25:decimal', stdlib.UInt_max, '0'));
        if (v849) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v443,
            tok: v323
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v323
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v471 = false;
        const v472 = await txn1.getOutput('Bob_seeWinner', 'v471', ctc6, v471);
        
        await stdlib.simMapSet(sim_r, 0, v443, undefined /* Nothing */);
        const v477 = stdlib.sub(v420, stdlib.checkedBigNumberify('./index.rsh:98:36:decimal', stdlib.UInt_max, '1'));
        const v850 = v477;
        const v853 = stdlib.gt(v477, stdlib.checkedBigNumberify('./index.rsh:81:25:decimal', stdlib.UInt_max, '0'));
        if (v853) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v322,
            tok: v323
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v323
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v444], secs: v446, time: v445, didSend: v204, from: v443 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v448 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v443), null);
  const v449 = stdlib.fromSome(v448, stdlib.checkedBigNumberify('./index.rsh:84:54:decimal', stdlib.UInt_max, '0'));
  const v450 = stdlib.eq(v449, v413);
  const v451 = v450 ? stdlib.checkedBigNumberify('./index.rsh:7:63:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:7:67:decimal', stdlib.UInt_max, '0');
  const v452 = stdlib.eq(v451, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v452) {
    const v460 = true;
    const v461 = await txn1.getOutput('Bob_seeWinner', 'v460', ctc6, v460);
    if (v204) {
      stdlib.protect(ctc0, await interact.out(v444, v461), {
        at: './index.rsh:82:10:application',
        fs: ['at ./index.rsh:82:10:application call to [unknown function] (defined at: ./index.rsh:82:10:function exp)', 'at ./index.rsh:90:12:application call to "k" (defined at: ./index.rsh:83:11:function exp)', 'at ./index.rsh:83:11:application call to [unknown function] (defined at: ./index.rsh:83:11:function exp)'],
        msg: 'out',
        who: 'Bob_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v443, undefined /* Nothing */);
    const v466 = stdlib.sub(v420, stdlib.checkedBigNumberify('./index.rsh:92:37:decimal', stdlib.UInt_max, '1'));
    const v846 = v466;
    const v849 = stdlib.gt(v466, stdlib.checkedBigNumberify('./index.rsh:81:25:decimal', stdlib.UInt_max, '0'));
    if (v849) {
      return;
      }
    else {
      ;
      return;
      }}
  else {
    const v471 = false;
    const v472 = await txn1.getOutput('Bob_seeWinner', 'v471', ctc6, v471);
    if (v204) {
      stdlib.protect(ctc0, await interact.out(v444, v472), {
        at: './index.rsh:82:10:application',
        fs: ['at ./index.rsh:82:10:application call to [unknown function] (defined at: ./index.rsh:82:10:function exp)', 'at ./index.rsh:96:12:application call to "k" (defined at: ./index.rsh:83:11:function exp)', 'at ./index.rsh:83:11:application call to [unknown function] (defined at: ./index.rsh:83:11:function exp)'],
        msg: 'out',
        who: 'Bob_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v443, undefined /* Nothing */);
    const v477 = stdlib.sub(v420, stdlib.checkedBigNumberify('./index.rsh:98:36:decimal', stdlib.UInt_max, '1'));
    const v850 = v477;
    const v853 = stdlib.gt(v477, stdlib.checkedBigNumberify('./index.rsh:81:25:decimal', stdlib.UInt_max, '0'));
    if (v853) {
      return;
      }
    else {
      ;
      return;
      }}
  
  
  };
export async function Bob_getTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_getTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_getTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_getTicket7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_seeWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_seeWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_seeWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bob_seeWinner6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_getTicket(uint64)byte[0]`, `Bob_seeWinner()byte`],
    pure: [],
    sigs: [`Bob_getTicket(uint64)byte[0]`, `Bob_seeWinner()byte`]
    },
  appApproval: `BiAPAAEHIAkoAwQIBqCb69gOBVhQoI0GJgMBAAABASI1ADEYQQQHKWRJIls1ASEIWzUCMRkjEkEACjEAKCEEr2ZCA9M2GgAXSUEAIyI1BCM1BkkhCgxAAAohChJENhoBQgB8gaucuMQHEkQpQgDTNhoCFzUENhoDNhoBF0khCwxAAWJJIQkMQAC3SSQMQABOJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABOIbs6mwMgY0AyEMWw9ENP8xABJENP80AyVbNAMhBVs0A1cwICI0AyENWzIGQgI1SCQ0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABHR4qCQ0/1CwMgY0AyEMWwxEgAgAAAAAAAABirApNQcxACgqNP9QZjQDVwAgNAMlWzQDIQVbNANXMCAjNAMhDVsjCDIGQgHSSCEJNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/iEFWzX9gTBbNfxJNQU1+4AEaJJkYzT7ULAiIyIxAIgCyEk1+iNbNPoiVU00/RJNIxJBACeACQAAAAAAAAHMAbAqNQcxACghBK9mNP80/jT9NPwjCTEAMgZCAb2ACQAAAAAAAAHXALAoNQcxACghBK9mNP80/jT9NPwjCTT/MgZCAZZJIwxAALVJIQYMQABkIQYSRCEGNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BUkiWzX+IQhbNf2ABKSl8Ig0/hZQNP0WULA0/zEAEkQ0A1coIDT+FjT9FlABEkQ0/zQDJVs0/TQDgUhbNP8yBkIBJSMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yVbNf6ABJqLkXSwIzT+iAHuNP8xABJENP80/jQDIQVbNANXMCAjIjIGQgBzSCEOiAG1IjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEIWzX+VxAgNf2ABBYtKDs0/xZQNP4WUDT9ULAhDogBe7EisgEishIhB7IQMgqyFDT/shGzMQA0/xZQNP4WUDT9UChLAVcAUGdIIzUBMgY1AkIA5zX/Nf41/TX8Nfs1+jX5NP40+ww0/RBBAC80/4HIAQg1+DT5NPoWUDT7FlA0/FA0/hZQNPgWUChLAVcAYGdIJDUBMgY1AkIAnzT5NPoWUDT8UDT+FlAoSwFXAFBnSCEGNQEyBjUCQgB/Nf81/jX9Nfw1+zX6NP0iDUEAITT6NPsWUDT8FlA0/RZQKEsBVwA4Z0ghCTUBMgY1AkIAS7EisgEjshIhB7IQNP6yFDT7shGzsSKyASKyEiEHshAyCbIVMgqyFDT7shGzQgAAMRkhCxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEEr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEHEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v323",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v324",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v323",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v324",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v412",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v413",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v444",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v387",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v394",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v460",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v471",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bob_getTicket",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_seeWinner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v412",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v413",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v444",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T19",
                "name": "v387",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001e2a38038062001e2a833981016040819052620000269162000246565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e341560076200013f565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b0390811687528151880151865290518b01518352600197889055439097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a09091019093528051919262000136926002929091019062000169565b5050506200032f565b81620001655760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017790620002f2565b90600052602060002090601f0160209004810192826200019b5760008555620001e6565b82601f10620001b657805160ff1916838001178555620001e6565b82800160010185558215620001e6579182015b82811115620001e6578251825591602001919060010190620001c9565b50620001f4929150620001f8565b5090565b5b80821115620001f45760008155600101620001f9565b604051606081016001600160401b03811182821017156200024057634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200025a57600080fd5b604080519081016001600160401b03811182821017156200028b57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002a557600080fd5b620002af6200020f565b60208501519092506001600160a01b0381168114620002cd57600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200030757607f821691505b602082108114156200032957634e487b7160e01b600052602260045260246000fd5b50919050565b611aeb806200033f6000396000f3fe60806040526004361061009a5760003560e01c806383230757116100615780638323075714610132578063ab53f2c614610147578063ac3ab7031461016a578063ad2d91d11461017d578063ad9fa3d814610190578063bf2c5b24146101a357005b80631e93b0f1146100a35780632c10a159146100c75780633bc5b7bf146100da57806342e7114d14610107578063608de1931461012a57005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611598565b6101b6565b3480156100e657600080fd5b506100fa6100f53660046115c9565b6101e6565b6040516100be91906115fc565b61011a610115366004611641565b610212565b60405190151581526020016100be565b61011a61024e565b34801561013e57600080fd5b506001546100b4565b34801561015357600080fd5b5061015c610289565b6040516100be929190611686565b6100a1610178366004611598565b610326565b6100a161018b3660046116c0565b610352565b6100a161019e366004611598565b61037e565b6100a16101b1366004611598565b6103aa565b60408051808201909152600080825260208201526101e26101dc36849003840184611748565b826103d6565b5050565b604080516060810182526000808252602082018190529181019190915261020c82610596565b92915050565b600061021c6113c0565b60208082015151849052604080518082019091526000808252918101919091526102468282610668565b519392505050565b60006102586113f2565b602080820151600090819052604080518082019091528181529182015261027f8282610873565b6020015192915050565b60006060600054600280805461029e90611780565b80601f01602080910402602001604051908101604052809291908181526020018280546102ca90611780565b80156103175780601f106102ec57610100808354040283529160200191610317565b820191906000526020600020905b8154815290600101906020018083116102fa57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526101e261034c368490038401846117b5565b82610668565b60408051808201909152600080825260208201526101e26103783684900384018461180c565b82610b77565b60408051808201909152600080825260208201526101e26103a436849003840184611866565b82610873565b60408051808201909152600080825260208201526101e26103d036849003840184611748565b82610d6e565b6103e6600160005414600b610f22565b81516104019015806103fa57508251600154145b600c610f22565b60008080556002805461041390611780565b80601f016020809104026020016040519081016040528092919081815260200182805461043f90611780565b801561048c5780601f106104615761010080835404028352916020019161048c565b820191906000526020600020905b81548152906001019060200180831161046f57829003601f168201915b50505050508060200190518101906104a49190611948565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16104fb34156008610f22565b61051561050e3383602001516001610f48565b6009610f22565b805161052d906001600160a01b03163314600a610f22565b61053561141c565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526060808501518451909101528183018051600190528051600093019290925290514391015261059081610f60565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156105e2576105e26115e6565b1415610659576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610623576106236115e6565b6001811115610634576106346115e6565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6106786007600054146016610f22565b815161069390158061068c57508251600154145b6017610f22565b6000808055600280546106a590611780565b80601f01602080910402602001604051908101604052809291908181526020018280546106d190611780565b801561071e5780601f106106f35761010080835404028352916020019161071e565b820191906000526020600020905b81548152906001019060200180831161070157829003601f168201915b50505050508060200190518101906107369190611964565b90506107498160a0015143106018610f22565b60408051338152845160208083019190915285015151518183015290517f028f10069e3d138251f5b63d2e84687a8240062d4382aa3353ec2f32004dc5519181900360600190a161079c34156015610f22565b604051600081527f716a63453193392129334ee08e54ce76e8e7725027306f62b0358cedfc005bbe9060200160405180910390a16000808352338152600460209081526040909120805460ff19166001908117825591850151515191015561080261141c565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183519091015260608084015183519091015281015160019081905260808301516108549190611a14565b6020808301805190910191909152514360409091015261059081610f60565b6108836006600054146013610f22565b815161089e90158061089757508251600154145b6014610f22565b6000808055600280546108b090611780565b80601f01602080910402602001604051908101604052809291908181526020018280546108dc90611780565b80156109295780601f106108fe57610100808354040283529160200191610929565b820191906000526020600020905b81548152906001019060200180831161090c57829003601f168201915b50505050508060200190518101906109419190611948565b6040805133815285516020808301919091528601515115158183015290519192507f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c21365919081900360600190a161099934156012610f22565b6040810151600190816109ab33610596565b5160018111156109bd576109bd6115e6565b146109c95760006109d7565b6109d233610596565b604001515b146109e35760006109e6565b60015b1415610aab57604051600181527f96993735d63f2a1492b9aeab1b9d564618a416400594ad357a91b83e5b905b909060200160405180910390a160016020808401829052336000908152600490915260408120805461ffff1916815590910155610a4e61146a565b815181516001600160a01b039182169052602080840151835192169101526040808301518251909101526060820151610a8990600190611a2c565b60208083018051929092528151339101525143604090910152610590816110fe565b604051600081527f29f5456df299720881c39325bab61c4644d025156b100fb0ef74470ef49ae2cf9060200160405180910390a1600060208084018290523382526004905260408120805461ffff1916815560010155610b0961146a565b815181516001600160a01b039182169052602080840151835192169101526040808301518251909101526060820151610b4490600190611a2c565b6020808301805192909252835182516001600160a01b039091169101525143604090910152610590816110fe565b505050565b610b876003600054146010610f22565b8151610ba2901580610b9b57508251600154145b6011610f22565b600080805560028054610bb490611780565b80601f0160208091040260200160405190810160405280929190818152602001828054610be090611780565b8015610c2d5780601f10610c0257610100808354040283529160200191610c2d565b820191906000526020600020905b815481529060010190602001808311610c1057829003601f168201915b5050505050806020019051810190610c459190611948565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a1610ca43415600d610f22565b8051610cbc906001600160a01b03163314600e610f22565b602080840151805190820151604051610d0a93610ce493929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826040015114600f610f22565b610d1261146a565b815181516001600160a01b039182169052602080840151835190831690820152858101518101518351604090810191909152606085015182850180519190915285518151941693909201929092525143910152610590816110fe565b610d7e600760005414601b610f22565b8151610d99901580610d9257508251600154145b601c610f22565b600080805560028054610dab90611780565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd790611780565b8015610e245780601f10610df957610100808354040283529160200191610e24565b820191906000526020600020905b815481529060010190602001808311610e0757829003601f168201915b5050505050806020019051810190610e3c9190611964565b9050610e508160a00151431015601d610f22565b60408051338152845160208083019190915285015115158183015290517f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb9181900360600190a1610ea334156019610f22565b8051610ebb906001600160a01b03163314601a610f22565b610ec361141c565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845190910152818301805160009052608085015181519093019290925290514391015261059081610f60565b816101e25760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610f56838530856111c6565b90505b9392505050565b604080516020810190915260008152815160400151602080840151015110610f89576000610f90565b6020820151515b156110985760c8826020015160400151610faa9190611a14565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151831681850190815286516040908101518187019081528851606090810151818901908152858b01518601516080808b019182528b5160a0808d019182526007600055436001558751998a019a909a529651909916948701949094529151908501525194830194909452925191810191909152905160c082015260e0015b604051602081830303815290604052600290805190602001906105909291906114b1565b604080516080810182526000808252602080830182815283850183815260608086018581528951516001600160a01b0390811688528a51860151169093528851015190528682015182015190526003909155436001559151909161107491839101611a43565b60208101515115611191576040805160808101825260008082526020808301828152838501838152606085018481528751516001600160a01b03908116875288518501511690925286518601519052858201515190526006909155436001559151909161116d91839101611a43565b60405160208183030381529060405260029080519060200190610b729291906114b1565b6111ad81600001516020015182602001516020015160016112a0565b600080805560018190556111c390600290611535565b50565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161122d91611a7c565b60006040518083038185875af1925050503d806000811461126a576040519150601f19603f3d011682016040523d82523d6000602084013e61126f565b606091505b5091509150611280828260016112b4565b50808060200190518101906112959190611a98565b979650505050505050565b6112ab8383836112ef565b610b7257600080fd5b606083156112c3575081610f59565b8251156112d35782518084602001fd5b60405163100960cb60e01b815260048101839052602401610f3f565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161134e91611a7c565b60006040518083038185875af1925050503d806000811461138b576040519150601f19603f3d011682016040523d82523d6000602084013e611390565b606091505b50915091506113a1828260026112b4565b50808060200190518101906113b69190611a98565b9695505050505050565b6040518060400160405280600081526020016113ed60408051808201909152600060208201908152815290565b905290565b6040518060400160405280600081526020016113ed60405180602001604052806000151581525090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b8280546114bd90611780565b90600052602060002090601f0160209004810192826114df5760008555611525565b82601f106114f857805160ff1916838001178555611525565b82800160010185558215611525579182015b8281111561152557825182559160200191906001019061150a565b5061153192915061156b565b5090565b50805461154190611780565b6000825580601f10611551575050565b601f0160209004906000526020600020908101906111c391905b5b80821115611531576000815560010161156c565b60006040828403121561159257600080fd5b50919050565b6000604082840312156115aa57600080fd5b610f598383611580565b6001600160a01b03811681146111c357600080fd5b6000602082840312156115db57600080fd5b8135610f59816115b4565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061162157634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b60006020828403121561165357600080fd5b5035919050565b60005b8381101561167557818101518382015260200161165d565b838111156105905750506000910152565b82815260406020820152600082518060408401526116ab81606085016020870161165a565b601f01601f1916919091016060019392505050565b60006060828403121561159257600080fd5b6040805190810167ffffffffffffffff8111828210171561170357634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561170357634e487b7160e01b600052604160045260246000fd5b80151581146111c357600080fd5b60006040828403121561175a57600080fd5b6117626116d2565b8235815260208301356117748161173a565b60208201529392505050565b600181811c9082168061179457607f821691505b6020821081141561159257634e487b7160e01b600052602260045260246000fd5b600081830360408112156117c857600080fd5b6117d06116d2565b833581526020601f19830112156117e657600080fd5b6117ee611709565b91506117f8611709565b602094850135815282529283015250919050565b6000818303606081121561181f57600080fd5b6118276116d2565b833581526040601f198301121561183d57600080fd5b6118456116d2565b60208581013582526040909501358582015293810193909352509092915050565b6000818303604081121561187957600080fd5b6118816116d2565b833581526020601f198301121561189757600080fd5b61189f611709565b915060208401356118af8161173a565b825260208101919091529392505050565b6000608082840312156118d257600080fd5b6040516080810181811067ffffffffffffffff8211171561190357634e487b7160e01b600052604160045260246000fd5b80604052508091508251611916816115b4565b81526020830151611926816115b4565b8060208301525060408301516040820152606083015160608201525092915050565b60006080828403121561195a57600080fd5b610f5983836118c0565b600060c0828403121561197657600080fd5b60405160c0810181811067ffffffffffffffff821117156119a757634e487b7160e01b600052604160045260246000fd5b60405282516119b5816115b4565b815260208301516119c5816115b4565b8060208301525060408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611a2757611a276119fe565b500190565b600082821015611a3e57611a3e6119fe565b500390565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080810161020c565b60008251611a8e81846020870161165a565b9190910192915050565b600060208284031215611aaa57600080fd5b8151610f598161173a56fea264697066735822122074b2aba6eb968b9374605e336cf86102595407324a50f689b5ac47dca356cbdb64736f6c634300080c0033`,
  BytecodeLen: 7722,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:44:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:67:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:105:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:78:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:51:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_getTicket": Bob_getTicket,
  "Bob_seeWinner": Bob_seeWinner
  };
export const _APIs = {
  Bob: {
    getTicket: Bob_getTicket,
    seeWinner: Bob_seeWinner
    }
  };
