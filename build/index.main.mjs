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
      6: [ctc1, ctc2, ctc2, ctc0],
      7: [ctc0, ctc1, ctc2, ctc3, ctc2]
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
    nftId: ctc3,
    ticketAmount: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v296 = stdlib.protect(ctc4, await interact.setParams(), {
    at: './index.rsh:37:66:application',
    fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:13:function exp)'],
    msg: 'setParams',
    who: 'Alice'
    });
  const v297 = v296.nftId;
  const v298 = v296.ticketAmount;
  const v301 = stdlib.protect(ctc1, await interact.getTicket(v298), {
    at: './index.rsh:38:46:application',
    fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:13:function exp)'],
    msg: 'getTicket',
    who: 'Alice'
    });
  const v302 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:39:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v303 = stdlib.digest(ctc5, [v302, v301]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v297, v298, v303],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v306, v307, v308], secs: v310, time: v309, didSend: v51, from: v305 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v306
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
  const {data: [v306, v307, v308], secs: v310, time: v309, didSend: v51, from: v305 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.seeHash(v308), {
    at: './index.rsh:44:21:application',
    fs: ['at ./index.rsh:44:21:application call to [unknown function] (defined at: ./index.rsh:44:21:function exp)', 'at ./index.rsh:44:21:application call to "liftedInteract" (defined at: ./index.rsh:44:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v305, v306, v307, v308],
    evt_cnt: 0,
    funcNum: 1,
    lct: v309,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'), v306]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v321, time: v320, didSend: v62, from: v319 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v306
        });
      
      const v333 = stdlib.checkedBigNumberify('./index.rsh:52:22:decimal', stdlib.UInt_max, '0');
      const v334 = v320;
      
      if (await (async () => {
        const v349 = stdlib.lt(v333, v307);
        
        return v349;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v321, time: v320, didSend: v62, from: v319 } = txn2;
  ;
  ;
  const v331 = stdlib.addressEq(v305, v319);
  stdlib.assert(v331, {
    at: './index.rsh:46:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.giveTickets(), {
    at: './index.rsh:47:25:application',
    fs: ['at ./index.rsh:47:25:application call to [unknown function] (defined at: ./index.rsh:47:25:function exp)', 'at ./index.rsh:47:25:application call to "liftedInteract" (defined at: ./index.rsh:47:25:application)'],
    msg: 'giveTickets',
    who: 'Alice'
    });
  
  let v333 = stdlib.checkedBigNumberify('./index.rsh:52:22:decimal', stdlib.UInt_max, '0');
  let v334 = v320;
  
  while (await (async () => {
    const v349 = stdlib.lt(v333, v307);
    
    return v349;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v360], secs: v362, time: v361, didSend: v113, from: v359 } = txn3;
    undefined /* setApiDetails */;
    const v364 = v360[stdlib.checkedBigNumberify('./index.rsh:56:10:spread', stdlib.UInt_max, '0')];
    ;
    const v367 = null;
    await txn3.getOutput('Bob_getTicket', 'v367', ctc0, v367);
    await stdlib.mapSet(map0, v359, v364);
    const v374 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:60:33:decimal', stdlib.UInt_max, '1'));
    const cv333 = v374;
    const cv334 = v361;
    
    v333 = cv333;
    v334 = cv334;
    
    continue;
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v305, v306, v308, v333, v302, v301],
    evt_cnt: 2,
    funcNum: 3,
    lct: v334,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:70:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v379, v380], secs: v382, time: v381, didSend: v136, from: v378 } = txn3;
      
      ;
      
      
      const v388 = v333;
      const v389 = v305;
      const v390 = v381;
      
      if (await (async () => {
        const v405 = stdlib.gt(v388, stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '0'));
        
        return v405;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v389,
          tok: v306
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v306
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
    tys: [ctc10, ctc3, ctc6, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v379, v380], secs: v382, time: v381, didSend: v136, from: v378 } = txn3;
  ;
  const v383 = stdlib.addressEq(v305, v378);
  stdlib.assert(v383, {
    at: './index.rsh:70:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v384 = stdlib.digest(ctc5, [v379, v380]);
  const v385 = stdlib.digestEq(v308, v384);
  stdlib.assert(v385, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:71:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.showWinningNum(v380), {
    at: './index.rsh:72:28:application',
    fs: ['at ./index.rsh:72:28:application call to [unknown function] (defined at: ./index.rsh:72:28:function exp)', 'at ./index.rsh:72:28:application call to "liftedInteract" (defined at: ./index.rsh:72:28:application)'],
    msg: 'showWinningNum',
    who: 'Alice'
    });
  
  stdlib.protect(ctc0, await interact.checkWin(), {
    at: './index.rsh:73:22:application',
    fs: ['at ./index.rsh:73:22:application call to [unknown function] (defined at: ./index.rsh:73:22:function exp)', 'at ./index.rsh:73:22:application call to "liftedInteract" (defined at: ./index.rsh:73:22:application)'],
    msg: 'checkWin',
    who: 'Alice'
    });
  
  let v388 = v333;
  let v389 = v305;
  let v390 = v381;
  
  while (await (async () => {
    const v405 = stdlib.gt(v388, stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '0'));
    
    return v405;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v412], secs: v414, time: v413, didSend: v187, from: v411 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v416 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v411), null);
    const v417 = stdlib.fromSome(v416, stdlib.checkedBigNumberify('./index.rsh:83:54:decimal', stdlib.UInt_max, '0'));
    const v418 = stdlib.eq(v417, v380);
    const v419 = v418 ? stdlib.checkedBigNumberify('./index.rsh:7:63:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:7:67:decimal', stdlib.UInt_max, '0');
    const v420 = stdlib.eq(v419, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v420) {
      const v428 = true;
      await txn4.getOutput('Bob_seeWinner', 'v428', ctc9, v428);
      await stdlib.mapSet(map0, v411, undefined /* Nothing */);
      const v434 = stdlib.sub(v388, stdlib.checkedBigNumberify('./index.rsh:91:37:decimal', stdlib.UInt_max, '1'));
      const cv388 = v434;
      const cv389 = v411;
      const cv390 = v413;
      
      v388 = cv388;
      v389 = cv389;
      v390 = cv390;
      
      continue;}
    else {
      const v439 = false;
      await txn4.getOutput('Bob_seeWinner', 'v439', ctc9, v439);
      await stdlib.mapSet(map0, v411, undefined /* Nothing */);
      const v445 = stdlib.sub(v388, stdlib.checkedBigNumberify('./index.rsh:97:40:decimal', stdlib.UInt_max, '1'));
      const cv388 = v445;
      const cv389 = v389;
      const cv390 = v413;
      
      v388 = cv388;
      v389 = cv389;
      v390 = cv390;
      
      continue;}
    
    }
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v380), {
    at: './index.rsh:103:25:application',
    fs: ['at ./index.rsh:103:25:application call to [unknown function] (defined at: ./index.rsh:103:25:function exp)', 'at ./index.rsh:103:25:application call to "liftedInteract" (defined at: ./index.rsh:103:25:application)'],
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
  
  
  const [v305, v306, v307, v308, v333] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc5, ctc1]);
  const v352 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:56:33:application call to [unknown function] (defined at: ./index.rsh:56:33:function exp)', 'at ./index.rsh:56:33:application call to [unknown function] (defined at: ./index.rsh:56:33:function exp)'],
    msg: 'in',
    who: 'Bob_getTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v305, v306, v307, v308, v333, v352],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v360], secs: v362, time: v361, didSend: v113, from: v359 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_getTicket"
        });
      const v364 = v360[stdlib.checkedBigNumberify('./index.rsh:56:10:spread', stdlib.UInt_max, '0')];
      ;
      const v367 = null;
      const v368 = await txn1.getOutput('Bob_getTicket', 'v367', ctc0, v367);
      
      await stdlib.simMapSet(sim_r, 0, v359, v364);
      const v374 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:60:33:decimal', stdlib.UInt_max, '1'));
      const v711 = v374;
      const v713 = stdlib.lt(v374, v307);
      if (v713) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v360], secs: v362, time: v361, didSend: v113, from: v359 } = txn1;
  undefined /* setApiDetails */;
  const v364 = v360[stdlib.checkedBigNumberify('./index.rsh:56:10:spread', stdlib.UInt_max, '0')];
  ;
  const v367 = null;
  const v368 = await txn1.getOutput('Bob_getTicket', 'v367', ctc0, v367);
  if (v113) {
    stdlib.protect(ctc0, await interact.out(v360, v368), {
      at: './index.rsh:56:11:application',
      fs: ['at ./index.rsh:56:11:application call to [unknown function] (defined at: ./index.rsh:56:11:function exp)', 'at ./index.rsh:58:10:application call to "k" (defined at: ./index.rsh:57:23:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
      msg: 'out',
      who: 'Bob_getTicket'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v359, v364);
  const v374 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:60:33:decimal', stdlib.UInt_max, '1'));
  const v711 = v374;
  const v713 = stdlib.lt(v374, v307);
  if (v713) {
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v306, v380, v388, v389] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc1, ctc1, ctc4]);
  const v408 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:81:9:application call to [unknown function] (defined at: ./index.rsh:81:9:function exp)', 'at ./index.rsh:81:9:application call to [unknown function] (defined at: ./index.rsh:81:9:function exp)'],
    msg: 'in',
    who: 'Bob_seeWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v306, v380, v388, v389, v408],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:81:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v412], secs: v414, time: v413, didSend: v187, from: v411 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_seeWinner"
        });
      ;
      const v416 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v411), null);
      const v417 = stdlib.fromSome(v416, stdlib.checkedBigNumberify('./index.rsh:83:54:decimal', stdlib.UInt_max, '0'));
      const v418 = stdlib.eq(v417, v380);
      const v419 = v418 ? stdlib.checkedBigNumberify('./index.rsh:7:63:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:7:67:decimal', stdlib.UInt_max, '0');
      const v420 = stdlib.eq(v419, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v420) {
        const v428 = true;
        const v429 = await txn1.getOutput('Bob_seeWinner', 'v428', ctc6, v428);
        
        await stdlib.simMapSet(sim_r, 0, v411, undefined /* Nothing */);
        const v434 = stdlib.sub(v388, stdlib.checkedBigNumberify('./index.rsh:91:37:decimal', stdlib.UInt_max, '1'));
        const v743 = v434;
        const v744 = v411;
        const v746 = stdlib.gt(v434, stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '0'));
        if (v746) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v411,
            tok: v306
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v306
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v439 = false;
        const v440 = await txn1.getOutput('Bob_seeWinner', 'v439', ctc6, v439);
        
        await stdlib.simMapSet(sim_r, 0, v411, undefined /* Nothing */);
        const v445 = stdlib.sub(v388, stdlib.checkedBigNumberify('./index.rsh:97:40:decimal', stdlib.UInt_max, '1'));
        const v747 = v445;
        const v748 = v389;
        const v750 = stdlib.gt(v445, stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '0'));
        if (v750) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v389,
            tok: v306
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v306
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
    tys: [ctc3, ctc1, ctc1, ctc4, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v412], secs: v414, time: v413, didSend: v187, from: v411 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v416 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v411), null);
  const v417 = stdlib.fromSome(v416, stdlib.checkedBigNumberify('./index.rsh:83:54:decimal', stdlib.UInt_max, '0'));
  const v418 = stdlib.eq(v417, v380);
  const v419 = v418 ? stdlib.checkedBigNumberify('./index.rsh:7:63:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:7:67:decimal', stdlib.UInt_max, '0');
  const v420 = stdlib.eq(v419, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  if (v420) {
    const v428 = true;
    const v429 = await txn1.getOutput('Bob_seeWinner', 'v428', ctc6, v428);
    if (v187) {
      stdlib.protect(ctc0, await interact.out(v412, v429), {
        at: './index.rsh:81:10:application',
        fs: ['at ./index.rsh:81:10:application call to [unknown function] (defined at: ./index.rsh:81:10:function exp)', 'at ./index.rsh:89:12:application call to "k" (defined at: ./index.rsh:82:11:function exp)', 'at ./index.rsh:82:11:application call to [unknown function] (defined at: ./index.rsh:82:11:function exp)'],
        msg: 'out',
        who: 'Bob_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v411, undefined /* Nothing */);
    const v434 = stdlib.sub(v388, stdlib.checkedBigNumberify('./index.rsh:91:37:decimal', stdlib.UInt_max, '1'));
    const v743 = v434;
    const v744 = v411;
    const v746 = stdlib.gt(v434, stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '0'));
    if (v746) {
      return;
      }
    else {
      ;
      return;
      }}
  else {
    const v439 = false;
    const v440 = await txn1.getOutput('Bob_seeWinner', 'v439', ctc6, v439);
    if (v187) {
      stdlib.protect(ctc0, await interact.out(v412, v440), {
        at: './index.rsh:81:10:application',
        fs: ['at ./index.rsh:81:10:application call to [unknown function] (defined at: ./index.rsh:81:10:function exp)', 'at ./index.rsh:95:12:application call to "k" (defined at: ./index.rsh:82:11:function exp)', 'at ./index.rsh:82:11:application call to [unknown function] (defined at: ./index.rsh:82:11:function exp)'],
        msg: 'out',
        who: 'Bob_seeWinner'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v411, undefined /* Nothing */);
    const v445 = stdlib.sub(v388, stdlib.checkedBigNumberify('./index.rsh:97:40:decimal', stdlib.UInt_max, '1'));
    const v747 = v445;
    const v748 = v389;
    const v750 = stdlib.gt(v445, stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '0'));
    if (v750) {
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
  appApproval: `BiANAAEICQMGBCCgm+vYDgUHKKCNBiYDAQAAAQEiNQAxGEEDjilkSSJbNQEkWzUCMRkjEkEACTEAKCWvZkIDXDYaABdJQQAjIjUEIzUGSSEIDEAACiEIEkQ2GgFCADKBq5y4xAcSRClCAIE2GgIXNQQ2GgM2GgEXSSEEDEABaUkhCQxAAQBJIQUMQABeIQUSRCEKNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gAR0eKgkNP9QsIAIAAAAAAAAAW+wKTUHMQAoKjT/UGY0A1cAIDQDIQdbNAMhC1s0A1cwIDQDgVBbIwgyBkIBv0ghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUkiWzX/JFs1/oEQWzX9STUFNfyABGiSZGM0/FCwIiMiMQCIAqlJNfsjWzT7IlVNNP4STSMSQQAkgAkAAAAAAAABrAGwKjUHMQAoJa9mNP80/jT9IwkxADIGQgGjgAkAAAAAAAABtwCwKDUHMQAoJa9mNP80/jT9Iwk0A1cYIDIGQgF8IQQSRCEENAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BUkiWzX+JFs1/YAEpKXwiDT+FlA0/RZQsDT/MQASRDQDVyggNP4WNP0WUAESRDQDIQdbNP00A4FIWzT/MgZCARpJIwxAAEojEkQjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hB1s1/oAEmouRdLAjNP6IAdk0/zEAEkQ0/zT+NAMhC1s0A1cwICIyBkIAckghDIgBoSI0ARJENARJIhJMNAISEURJNQVJSSJbNf8kWzX+VxAgNf2ABBYtKDs0/xZQNP4WUDT9ULAhDIgBaLEisgEishIhBrIQMgqyFDT/shGzMQA0/xZQNP4WUDT9UChLAVcAUGdIIzUBMgY1AkIA1TX/Nf41/TX8Nfs1+jT+NPwMQQAkNPo0+xZQNPwWUDT9UDT+FlAoSwFXAFhnSCEKNQEyBjUCQgCdNPo0+xZQNP1QNP4WUChLAVcAUGdIIQQ1ATIGNQJCAH01/zX+Nf01/DX7NP0iDUEAITT7FjT8FlA0/RZQNP5QKEsBVwA4Z0ghBTUBMgY1AkIAS7EisgEjshIhBrIQNP6yFDT7shGzsSKyASKyEiEGshAyCbIVMgqyFDT7shGzQgAAMRkhCRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAESCWviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQYSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 88,
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
                "name": "v306",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v307",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v308",
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
                "name": "v306",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v307",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v308",
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
                "name": "v379",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v412",
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
                "name": "v360",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v367",
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
    "name": "_reach_oe_v428",
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
    "name": "_reach_oe_v439",
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
                "name": "v379",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v412",
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
                "name": "v360",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001be938038062001be9833981016040819052620000269162000246565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e341560076200013f565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b0390811687528151880151865290518b01518352600197889055439097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a09091019093528051919262000136926002929091019062000169565b5050506200032f565b81620001655760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017790620002f2565b90600052602060002090601f0160209004810192826200019b5760008555620001e6565b82601f10620001b657805160ff1916838001178555620001e6565b82800160010185558215620001e6579182015b82811115620001e6578251825591602001919060010190620001c9565b50620001f4929150620001f8565b5090565b5b80821115620001f45760008155600101620001f9565b604051606081016001600160401b03811182821017156200024057634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200025a57600080fd5b604080519081016001600160401b03811182821017156200028b57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002a557600080fd5b620002af6200020f565b60208501519092506001600160a01b0381168114620002cd57600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200030757607f821691505b602082108114156200032957634e487b7160e01b600052602260045260246000fd5b50919050565b6118aa806200033f6000396000f3fe60806040526004361061008f5760003560e01c806383230757116100565780638323075714610127578063ab53f2c61461013c578063ac3ab7031461015f578063ad2d91d114610172578063ad9fa3d81461018557005b80631e93b0f1146100985780632c10a159146100bc5780633bc5b7bf146100cf57806342e7114d146100fc578063608de1931461011f57005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611317565b610198565b3480156100db57600080fd5b506100ef6100ea366004611348565b6101c8565b6040516100b3919061137b565b61010f61010a3660046113c0565b6101f4565b60405190151581526020016100b3565b61010f610230565b34801561013357600080fd5b506001546100a9565b34801561014857600080fd5b5061015161026b565b6040516100b3929190611405565b61009661016d366004611317565b610308565b61009661018036600461143f565b610334565b610096610193366004611317565b610360565b60408051808201909152600080825260208201526101c46101be368490038401846114c7565b8261038c565b5050565b60408051606081018252600080825260208201819052918101919091526101ee82610542565b92915050565b60006101fe611147565b60208082015151849052604080518082019091526000808252918101919091526102288282610614565b519392505050565b600061023a611179565b60208082015160009081905260408051808201909152818152918201526102618282610800565b6020015192915050565b600060606000546002808054610280906114ff565b80601f01602080910402602001604051908101604052809291908181526020018280546102ac906114ff565b80156102f95780601f106102ce576101008083540402835291602001916102f9565b820191906000526020600020905b8154815290600101906020018083116102dc57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526101c461032e36849003840184611534565b82610614565b60408051808201909152600080825260208201526101c461035a3684900384018461158b565b82610aee565b60408051808201909152600080825260208201526101c4610386368490038401846115e5565b82610800565b61039c600160005414600b610cd4565b81516103b79015806103b057508251600154145b600c610cd4565b6000808055600280546103c9906114ff565b80601f01602080910402602001604051908101604052809291908181526020018280546103f5906114ff565b80156104425780601f1061041757610100808354040283529160200191610442565b820191906000526020600020905b81548152906001019060200180831161042557829003601f168201915b505050505080602001905181019061045a91906116c7565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16104b134156008610cd4565b6104cb6104c43383602001516001610cfa565b6009610cd4565b80516104e3906001600160a01b03163314600a610cd4565b6104eb6111a3565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835190910152606080840151835190910152808201805160009052514391015261053c81610d12565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561058e5761058e611365565b1415610605576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156105cf576105cf611365565b60018111156105e0576105e0611365565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6106246007600054146016610cd4565b815161063f90158061063857508251600154145b6017610cd4565b600080805560028054610651906114ff565b80601f016020809104026020016040519081016040528092919081815260200182805461067d906114ff565b80156106ca5780601f1061069f576101008083540402835291602001916106ca565b820191906000526020600020905b8154815290600101906020018083116106ad57829003601f168201915b50505050508060200190518101906106e291906116e3565b60408051338152855160208083019190915286015151518183015290519192507f028f10069e3d138251f5b63d2e84687a8240062d4382aa3353ec2f32004dc551919081900360600190a161073934156015610cd4565b604051600081527f0ec721e0cbea4ada3462152998888e5a89e37779fed200b56b185b3e0c5aac499060200160405180910390a16000808352338152600460209081526040909120805460ff19166001908117825591850151515191015561079f6111a3565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608083015182519091015260808201516107e690600190611789565b602080830180519290925290514391015261053c81610d12565b6108106006600054146013610cd4565b815161082b90158061082457508251600154145b6014610cd4565b60008080556002805461083d906114ff565b80601f0160208091040260200160405190810160405280929190818152602001828054610869906114ff565b80156108b65780601f1061088b576101008083540402835291602001916108b6565b820191906000526020600020905b81548152906001019060200180831161089957829003601f168201915b50505050508060200190518101906108ce91906117a1565b6040805133815285516020808301919091528601515115158183015290519192507f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c21365919081900360600190a161092634156012610cd4565b60208101516001908161093833610542565b51600181111561094a5761094a611365565b14610956576000610964565b61095f33610542565b604001515b14610970576000610973565b60015b1415610a2b57604051600181527f054404e293f2bfeda4043624564fb74f520a968642ea8283d727e9a3f978390d9060200160405180910390a160016020808401829052336000908152600490915260408120805461ffff19168155909101556109db6111f0565b815181516001600160a01b0390911690526020808301518251909101526040820151610a0990600190611824565b6020808301805192909252815133910152514360409091015261053c81610e94565b604051600081527fbb47adf46185fc2350b4a1ef78e05835203e9f993d914aaa08dfe2376dcd47f49060200160405180910390a1600060208084018290523382526004905260408120805461ffff1916815560010155610a896111f0565b815181516001600160a01b0390911690526020808301518251909101526040820151610ab790600190611824565b6020808301805192909252606084015182516001600160a01b0390911691015251436040919091015261053c81610e94565b505050565b610afe6003600054146010610cd4565b8151610b19901580610b1257508251600154145b6011610cd4565b600080805560028054610b2b906114ff565b80601f0160208091040260200160405190810160405280929190818152602001828054610b57906114ff565b8015610ba45780601f10610b7957610100808354040283529160200191610ba4565b820191906000526020600020905b815481529060010190602001808311610b8757829003601f168201915b5050505050806020019051810190610bbc91906116c7565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a1610c1b3415600d610cd4565b8051610c33906001600160a01b03163314600e610cd4565b602080840151805190820151604051610c8193610c5b93929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826040015114600f610cd4565b610c896111f0565b60208083015182516001600160a01b03918216905285820151820151835183015260608401518383018051919091528451815192169190920152514360409091015261053c81610e94565b816101c45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610d0883853085610f4d565b90505b9392505050565b8051604001516020820151511015610e0d57610d686040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151831681850190815285516040908101518187019081528751606090810151818901908152858a0151516080808b019182526007600055436001558551978801989098529451909716928501929092525190830152925191810191909152905160a082015260c0015b60405160208183030381529060405260029080519060200190610ae9929190611230565b60408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b51870151821686528b5184015185528b8701515183526003909755436001558951958601969096529251909416968301969096529451918101919091529251908301529060a001610de9565b50565b60208101515115610f205760408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b5187015186528b8701805151865251870151821683526006909755436001558951958601969096529251978401979097525195820195909552935116908301529060a001610de9565b8051516020808301510151610f3791906001611027565b60008080556001819055610e91906002906112b4565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610fb49161183b565b60006040518083038185875af1925050503d8060008114610ff1576040519150601f19603f3d011682016040523d82523d6000602084013e610ff6565b606091505b50915091506110078282600161103b565b508080602001905181019061101c9190611857565b979650505050505050565b611032838383611076565b610ae957600080fd5b6060831561104a575081610d0b565b82511561105a5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610cf1565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916110d59161183b565b60006040518083038185875af1925050503d8060008114611112576040519150601f19603f3d011682016040523d82523d6000602084013e611117565b606091505b50915091506111288282600261103b565b508080602001905181019061113d9190611857565b9695505050505050565b60405180604001604052806000815260200161117460408051808201909152600060208201908152815290565b905290565b60405180604001604052806000815260200161117460405180602001604052806000151581525090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001611174604051806040016040528060008152602001600081525090565b6040805160808101825260009181018281526060820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b82805461123c906114ff565b90600052602060002090601f01602090048101928261125e57600085556112a4565b82601f1061127757805160ff19168380011785556112a4565b828001600101855582156112a4579182015b828111156112a4578251825591602001919060010190611289565b506112b09291506112ea565b5090565b5080546112c0906114ff565b6000825580601f106112d0575050565b601f016020900490600052602060002090810190610e9191905b5b808211156112b057600081556001016112eb565b60006040828403121561131157600080fd5b50919050565b60006040828403121561132957600080fd5b610d0b83836112ff565b6001600160a01b0381168114610e9157600080fd5b60006020828403121561135a57600080fd5b8135610d0b81611333565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106113a057634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b6000602082840312156113d257600080fd5b5035919050565b60005b838110156113f45781810151838201526020016113dc565b8381111561053c5750506000910152565b828152604060208201526000825180604084015261142a8160608501602087016113d9565b601f01601f1916919091016060019392505050565b60006060828403121561131157600080fd5b6040805190810167ffffffffffffffff8111828210171561148257634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561148257634e487b7160e01b600052604160045260246000fd5b8015158114610e9157600080fd5b6000604082840312156114d957600080fd5b6114e1611451565b8235815260208301356114f3816114b9565b60208201529392505050565b600181811c9082168061151357607f821691505b6020821081141561131157634e487b7160e01b600052602260045260246000fd5b6000818303604081121561154757600080fd5b61154f611451565b833581526020601f198301121561156557600080fd5b61156d611488565b9150611577611488565b602094850135815282529283015250919050565b6000818303606081121561159e57600080fd5b6115a6611451565b833581526040601f19830112156115bc57600080fd5b6115c4611451565b60208581013582526040909501358582015293810193909352509092915050565b600081830360408112156115f857600080fd5b611600611451565b833581526020601f198301121561161657600080fd5b61161e611488565b9150602084013561162e816114b9565b825260208101919091529392505050565b60006080828403121561165157600080fd5b6040516080810181811067ffffffffffffffff8211171561168257634e487b7160e01b600052604160045260246000fd5b8060405250809150825161169581611333565b815260208301516116a581611333565b8060208301525060408301516040820152606083015160608201525092915050565b6000608082840312156116d957600080fd5b610d0b838361163f565b600060a082840312156116f557600080fd5b60405160a0810181811067ffffffffffffffff8211171561172657634e487b7160e01b600052604160045260246000fd5b604052825161173481611333565b8152602083015161174481611333565b806020830152506040830151604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561179c5761179c611773565b500190565b6000608082840312156117b357600080fd5b6040516080810181811067ffffffffffffffff821117156117e457634e487b7160e01b600052604160045260246000fd5b60405282516117f281611333565b808252506020830151602082015260408301516040820152606083015161181881611333565b60608201529392505050565b60008282101561183657611836611773565b500390565b6000825161184d8184602087016113d9565b9190910192915050565b60006020828403121561186957600080fd5b8151610d0b816114b956fea2646970667358221220641947d94982cdd5e8acf36693847ee4e9e019016178b56aa014f57805b96a7364736f6c634300080c0033`,
  BytecodeLen: 7145,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:104:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:77:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:52:19:after expr stmt semicolon',
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
