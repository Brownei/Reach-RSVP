// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  const map1_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Attendee_isGoingToBePresent0_84: ctc3,
    Attendee_seePrice0_84: ctc3,
    Checkin_isPresent0_84: ctc5,
    Status_seeStatus0_84: ctc3
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v637 = stdlib.protect(ctc2, interact.deadline, 'for Admin\'s interact field deadline');
  const v638 = stdlib.protect(ctc2, interact.price, 'for Admin\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v638, v637],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v642, v643], secs: v645, time: v644, didSend: v29, from: v641 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v642, v643], secs: v645, time: v644, didSend: v29, from: v641 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v641, v642, v643, v644],
    evt_cnt: 0,
    funcNum: 1,
    lct: v644,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v648, time: v647, didSend: v34, from: v646 } = txn2;
      
      ;
      
      const v657 = stdlib.add(v644, v643);
      const v659 = stdlib.checkedBigNumberify('./index.rsh:44:27:decimal', stdlib.UInt_max, '0');
      const v660 = true;
      const v661 = v647;
      
      if (await (async () => {
        
        return v660;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1102 = stdlib.mul(v659, v642);
        sim_r.txns.push({
          kind: 'from',
          to: v641,
          tok: undefined /* Nothing */
          });
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
    tys: [ctc4, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v648, time: v647, didSend: v34, from: v646 } = txn2;
  ;
  const v649 = stdlib.addressEq(v641, v646);
  stdlib.assert(v649, {
    at: './index.rsh:34:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:35:23:application',
    fs: ['at ./index.rsh:35:23:application call to [unknown function] (defined at: ./index.rsh:35:23:function exp)', 'at ./index.rsh:35:23:application call to "liftedInteract" (defined at: ./index.rsh:35:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const v657 = stdlib.add(v644, v643);
  let v659 = stdlib.checkedBigNumberify('./index.rsh:44:27:decimal', stdlib.UInt_max, '0');
  let v660 = true;
  let v661 = v647;
  
  while (await (async () => {
    
    return v660;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v657],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1091], secs: v1093, time: v1092, didSend: v601, from: v1090 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v1094 = true;
      await txn4.getOutput('Checkin_timesUp', 'v1094', ctc7, v1094);
      stdlib.protect(ctc0, await interact.informTimeout(), {
        at: './index.rsh:87:35:application',
        fs: ['at ./index.rsh:87:35:application call to [unknown function] (defined at: ./index.rsh:87:35:function exp)', 'at ./index.rsh:87:35:application call to "liftedInteract" (defined at: ./index.rsh:87:35:application)', 'at ./index.rsh:84:33:application call to [unknown function] (defined at: ./index.rsh:84:33:function exp)'],
        msg: 'informTimeout',
        who: 'Admin'
        });
      
      const cv659 = v659;
      const cv660 = false;
      const cv661 = v1092;
      
      v659 = cv659;
      v660 = cv660;
      v661 = cv661;
      
      continue;
      }
    else {
      const {data: [v748], secs: v750, time: v749, didSend: v464, from: v747 } = txn3;
      switch (v748[0]) {
        case 'Attendee_isGoingToBePresent0_84': {
          const v751 = v748[1];
          undefined /* setApiDetails */;
          const v756 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v747), null);
          let v757;
          switch (v756[0]) {
            case 'None': {
              const v758 = v756[1];
              v757 = false;
              
              break;
              }
            case 'Some': {
              const v759 = v756[1];
              v757 = true;
              
              break;
              }
            }
          const v760 = v757 ? false : true;
          stdlib.assert(v760, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:49:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:48:43:application call to [unknown function] (defined at: ./index.rsh:48:43:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:48:43:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
            msg: 'not yet',
            who: 'Admin'
            });
          ;
          let v777;
          switch (v756[0]) {
            case 'None': {
              const v778 = v756[1];
              v777 = false;
              
              break;
              }
            case 'Some': {
              const v779 = v756[1];
              v777 = true;
              
              break;
              }
            }
          const v780 = v777 ? false : true;
          stdlib.assert(v780, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:49:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:50:27:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)'],
            msg: 'not yet',
            who: 'Admin'
            });
          const v782 = true;
          await txn3.getOutput('Attendee_isGoingToBePresent', 'v782', ctc7, v782);
          await stdlib.mapSet(map0, v747, null);
          stdlib.protect(ctc0, await interact.informRSVP(v747), {
            at: './index.rsh:53:34:application',
            fs: ['at ./index.rsh:53:34:application call to [unknown function] (defined at: ./index.rsh:53:34:function exp)', 'at ./index.rsh:53:34:application call to "liftedInteract" (defined at: ./index.rsh:53:34:application)', 'at ./index.rsh:50:27:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)'],
            msg: 'informRSVP',
            who: 'Admin'
            });
          
          const v790 = stdlib.add(v659, stdlib.checkedBigNumberify('./index.rsh:55:39:decimal', stdlib.UInt_max, '1'));
          const cv659 = v790;
          const cv660 = true;
          const cv661 = v749;
          
          v659 = cv659;
          v660 = cv660;
          v661 = cv661;
          
          continue;
          break;
          }
        case 'Attendee_seePrice0_84': {
          const v835 = v748[1];
          undefined /* setApiDetails */;
          ;
          await txn3.getOutput('Attendee_seePrice', 'v642', ctc2, v642);
          const cv659 = v659;
          const cv660 = true;
          const cv661 = v749;
          
          v659 = cv659;
          v660 = cv660;
          v661 = cv661;
          
          continue;
          break;
          }
        case 'Checkin_isPresent0_84': {
          const v919 = v748[1];
          undefined /* setApiDetails */;
          const v932 = v919[stdlib.checkedBigNumberify('./index.rsh:65:10:spread', stdlib.UInt_max, '0')];
          const v933 = stdlib.addressEq(v747, v641);
          stdlib.assert(v933, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:66:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:36:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
            msg: 'you are the boss',
            who: 'Admin'
            });
          const v935 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v932), null);
          let v936;
          switch (v935[0]) {
            case 'None': {
              const v937 = v935[1];
              v936 = false;
              
              break;
              }
            case 'Some': {
              const v938 = v935[1];
              v936 = true;
              
              break;
              }
            }
          stdlib.assert(v936, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:36:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
            msg: 'yep',
            who: 'Admin'
            });
          ;
          let v972;
          switch (v935[0]) {
            case 'None': {
              const v973 = v935[1];
              v972 = false;
              
              break;
              }
            case 'Some': {
              const v974 = v935[1];
              v972 = true;
              
              break;
              }
            }
          stdlib.assert(v972, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:23:application call to [unknown function] (defined at: ./index.rsh:68:23:function exp)'],
            msg: 'yep',
            who: 'Admin'
            });
          const v977 = true;
          await txn3.getOutput('Checkin_isPresent', 'v977', ctc7, v977);
          ;
          await stdlib.mapSet(map0, v932, undefined /* Nothing */);
          await stdlib.mapSet(map1, v932, null);
          const v990 = stdlib.sub(v659, stdlib.checkedBigNumberify('./index.rsh:74:39:decimal', stdlib.UInt_max, '1'));
          const cv659 = v990;
          const cv660 = true;
          const cv661 = v749;
          
          v659 = cv659;
          v660 = cv660;
          v661 = cv661;
          
          continue;
          break;
          }
        case 'Status_seeStatus0_84': {
          const v1003 = v748[1];
          undefined /* setApiDetails */;
          ;
          const v1077 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v747), null);
          let v1078;
          switch (v1077[0]) {
            case 'None': {
              const v1079 = v1077[1];
              v1078 = false;
              
              break;
              }
            case 'Some': {
              const v1080 = v1077[1];
              v1078 = true;
              
              break;
              }
            }
          await txn3.getOutput('Status_seeStatus', 'v1078', ctc7, v1078);
          const cv659 = v659;
          const cv660 = true;
          const cv661 = v749;
          
          v659 = cv659;
          v660 = cv660;
          v661 = cv661;
          
          continue;
          break;
          }
        }}
    
    }
  const v1102 = stdlib.mul(v659, v642);
  ;
  return;
  
  
  
  
  };
export async function _Attendee_isGoingToBePresent4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attendee_isGoingToBePresent4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attendee_isGoingToBePresent4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Data({
    Attendee_isGoingToBePresent0_84: ctc4,
    Attendee_seePrice0_84: ctc4,
    Checkin_isPresent0_84: ctc5,
    Status_seeStatus0_84: ctc4
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v641, v642, v657, v659] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v680 = ctc.selfAddress();
  const v682 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:48:43:application call to [unknown function] (defined at: ./index.rsh:48:43:function exp)', 'at ./index.rsh:44:19:application call to "runAttendee_isGoingToBePresent0_84" (defined at: ./index.rsh:48:10:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'in',
    who: 'Attendee_isGoingToBePresent'
    });
  const v683 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v680), null);
  let v684;
  switch (v683[0]) {
    case 'None': {
      const v685 = v683[1];
      v684 = false;
      
      break;
      }
    case 'Some': {
      const v686 = v683[1];
      v684 = true;
      
      break;
      }
    }
  const v687 = v684 ? false : true;
  stdlib.assert(v687, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:49:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:48:43:application call to [unknown function] (defined at: ./index.rsh:48:43:function exp)', 'at ./index.rsh:44:19:application call to "runAttendee_isGoingToBePresent0_84" (defined at: ./index.rsh:48:10:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'not yet',
    who: 'Attendee_isGoingToBePresent'
    });
  const v692 = ['Attendee_isGoingToBePresent0_84', v682];
  
  let v731;
  switch (v683[0]) {
    case 'None': {
      const v732 = v683[1];
      v731 = false;
      
      break;
      }
    case 'Some': {
      const v733 = v683[1];
      v731 = true;
      
      break;
      }
    }
  const v734 = v731 ? false : true;
  stdlib.assert(v734, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:49:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:48:43:application call to [unknown function] (defined at: ./index.rsh:48:43:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:48:43:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'not yet',
    who: 'Attendee_isGoingToBePresent'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v641, v642, v657, v659, v692],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v642, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v748], secs: v750, time: v749, didSend: v464, from: v747 } = txn1;
      
      switch (v748[0]) {
        case 'Attendee_isGoingToBePresent0_84': {
          const v751 = v748[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attendee_isGoingToBePresent"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v747), null);
          sim_r.txns.push({
            amt: v642,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v782 = true;
          const v783 = await txn1.getOutput('Attendee_isGoingToBePresent', 'v782', ctc7, v782);
          
          await stdlib.simMapSet(sim_r, 0, v747, null);
          const v790 = stdlib.add(v659, stdlib.checkedBigNumberify('./index.rsh:55:39:decimal', stdlib.UInt_max, '1'));
          const v2601 = v790;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Attendee_seePrice0_84': {
          const v835 = v748[1];
          
          break;
          }
        case 'Checkin_isPresent0_84': {
          const v919 = v748[1];
          
          break;
          }
        case 'Status_seeStatus0_84': {
          const v1003 = v748[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v748], secs: v750, time: v749, didSend: v464, from: v747 } = txn1;
  switch (v748[0]) {
    case 'Attendee_isGoingToBePresent0_84': {
      const v751 = v748[1];
      undefined /* setApiDetails */;
      const v756 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v747), null);
      let v757;
      switch (v756[0]) {
        case 'None': {
          const v758 = v756[1];
          v757 = false;
          
          break;
          }
        case 'Some': {
          const v759 = v756[1];
          v757 = true;
          
          break;
          }
        }
      const v760 = v757 ? false : true;
      stdlib.assert(v760, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:49:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:48:43:application call to [unknown function] (defined at: ./index.rsh:48:43:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:48:43:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
        msg: 'not yet',
        who: 'Attendee_isGoingToBePresent'
        });
      ;
      let v777;
      switch (v756[0]) {
        case 'None': {
          const v778 = v756[1];
          v777 = false;
          
          break;
          }
        case 'Some': {
          const v779 = v756[1];
          v777 = true;
          
          break;
          }
        }
      const v780 = v777 ? false : true;
      stdlib.assert(v780, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:49:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:50:27:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)'],
        msg: 'not yet',
        who: 'Attendee_isGoingToBePresent'
        });
      const v782 = true;
      const v783 = await txn1.getOutput('Attendee_isGoingToBePresent', 'v782', ctc7, v782);
      if (v464) {
        stdlib.protect(ctc0, await interact.out(v751, v783), {
          at: './index.rsh:48:11:application',
          fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:11:function exp)', 'at ./index.rsh:51:10:application call to "k" (defined at: ./index.rsh:50:27:function exp)', 'at ./index.rsh:50:27:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)'],
          msg: 'out',
          who: 'Attendee_isGoingToBePresent'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v747, null);
      const v790 = stdlib.add(v659, stdlib.checkedBigNumberify('./index.rsh:55:39:decimal', stdlib.UInt_max, '1'));
      const v2601 = v790;
      return;
      
      break;
      }
    case 'Attendee_seePrice0_84': {
      const v835 = v748[1];
      return;
      break;
      }
    case 'Checkin_isPresent0_84': {
      const v919 = v748[1];
      return;
      break;
      }
    case 'Status_seeStatus0_84': {
      const v1003 = v748[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Attendee_seePrice4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attendee_seePrice4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attendee_seePrice4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Data({
    Attendee_isGoingToBePresent0_84: ctc4,
    Attendee_seePrice0_84: ctc4,
    Checkin_isPresent0_84: ctc5,
    Status_seeStatus0_84: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v641, v642, v657, v659] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v696 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:58:33:application call to [unknown function] (defined at: ./index.rsh:58:33:function exp)', 'at ./index.rsh:44:19:application call to "runAttendee_seePrice0_84" (defined at: ./index.rsh:58:10:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'in',
    who: 'Attendee_seePrice'
    });
  const v700 = ['Attendee_seePrice0_84', v696];
  
  const txn1 = await (ctc.sendrecv({
    args: [v641, v642, v657, v659, v700],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v748], secs: v750, time: v749, didSend: v464, from: v747 } = txn1;
      
      switch (v748[0]) {
        case 'Attendee_isGoingToBePresent0_84': {
          const v751 = v748[1];
          
          break;
          }
        case 'Attendee_seePrice0_84': {
          const v835 = v748[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attendee_seePrice"
            });
          ;
          const v877 = await txn1.getOutput('Attendee_seePrice', 'v642', ctc3, v642);
          
          const v2621 = v659;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Checkin_isPresent0_84': {
          const v919 = v748[1];
          
          break;
          }
        case 'Status_seeStatus0_84': {
          const v1003 = v748[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v748], secs: v750, time: v749, didSend: v464, from: v747 } = txn1;
  switch (v748[0]) {
    case 'Attendee_isGoingToBePresent0_84': {
      const v751 = v748[1];
      return;
      break;
      }
    case 'Attendee_seePrice0_84': {
      const v835 = v748[1];
      undefined /* setApiDetails */;
      ;
      const v877 = await txn1.getOutput('Attendee_seePrice', 'v642', ctc3, v642);
      if (v464) {
        stdlib.protect(ctc0, await interact.out(v835, v877), {
          at: './index.rsh:58:11:application',
          fs: ['at ./index.rsh:58:11:application call to [unknown function] (defined at: ./index.rsh:58:11:function exp)', 'at ./index.rsh:60:10:application call to "k" (defined at: ./index.rsh:59:23:function exp)', 'at ./index.rsh:59:23:application call to [unknown function] (defined at: ./index.rsh:59:23:function exp)'],
          msg: 'out',
          who: 'Attendee_seePrice'
          });
        }
      else {
        }
      
      const v2621 = v659;
      return;
      
      break;
      }
    case 'Checkin_isPresent0_84': {
      const v919 = v748[1];
      return;
      break;
      }
    case 'Status_seeStatus0_84': {
      const v1003 = v748[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Checkin_isPresent4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Checkin_isPresent4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Checkin_isPresent4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Attendee_isGoingToBePresent0_84: ctc5,
    Attendee_seePrice0_84: ctc5,
    Checkin_isPresent0_84: ctc4,
    Status_seeStatus0_84: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v641, v642, v657, v659] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v702 = ctc.selfAddress();
  const v704 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:65:36:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to "runCheckin_isPresent0_84" (defined at: ./index.rsh:65:10:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'in',
    who: 'Checkin_isPresent'
    });
  const v705 = v704[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v707 = stdlib.addressEq(v702, v641);
  stdlib.assert(v707, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:66:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:36:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to "runCheckin_isPresent0_84" (defined at: ./index.rsh:65:10:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'you are the boss',
    who: 'Checkin_isPresent'
    });
  const v709 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v705), null);
  let v710;
  switch (v709[0]) {
    case 'None': {
      const v711 = v709[1];
      v710 = false;
      
      break;
      }
    case 'Some': {
      const v712 = v709[1];
      v710 = true;
      
      break;
      }
    }
  stdlib.assert(v710, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:36:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to "runCheckin_isPresent0_84" (defined at: ./index.rsh:65:10:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'yep',
    who: 'Checkin_isPresent'
    });
  const v719 = ['Checkin_isPresent0_84', v704];
  
  let v742;
  switch (v709[0]) {
    case 'None': {
      const v743 = v709[1];
      v742 = false;
      
      break;
      }
    case 'Some': {
      const v744 = v709[1];
      v742 = true;
      
      break;
      }
    }
  stdlib.assert(v742, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:36:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'yep',
    who: 'Checkin_isPresent'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v641, v642, v657, v659, v719],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:68:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v748], secs: v750, time: v749, didSend: v464, from: v747 } = txn1;
      
      switch (v748[0]) {
        case 'Attendee_isGoingToBePresent0_84': {
          const v751 = v748[1];
          
          break;
          }
        case 'Attendee_seePrice0_84': {
          const v835 = v748[1];
          
          break;
          }
        case 'Checkin_isPresent0_84': {
          const v919 = v748[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Checkin_isPresent"
            });
          const v932 = v919[stdlib.checkedBigNumberify('./index.rsh:65:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v932), null);
          ;
          const v977 = true;
          const v978 = await txn1.getOutput('Checkin_isPresent', 'v977', ctc7, v977);
          
          sim_r.txns.push({
            kind: 'from',
            to: v932,
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v932, undefined /* Nothing */);
          await stdlib.simMapSet(sim_r, 1, v932, null);
          const v990 = stdlib.sub(v659, stdlib.checkedBigNumberify('./index.rsh:74:39:decimal', stdlib.UInt_max, '1'));
          const v2641 = v990;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Status_seeStatus0_84': {
          const v1003 = v748[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v748], secs: v750, time: v749, didSend: v464, from: v747 } = txn1;
  switch (v748[0]) {
    case 'Attendee_isGoingToBePresent0_84': {
      const v751 = v748[1];
      return;
      break;
      }
    case 'Attendee_seePrice0_84': {
      const v835 = v748[1];
      return;
      break;
      }
    case 'Checkin_isPresent0_84': {
      const v919 = v748[1];
      undefined /* setApiDetails */;
      const v932 = v919[stdlib.checkedBigNumberify('./index.rsh:65:10:spread', stdlib.UInt_max, '0')];
      const v933 = stdlib.addressEq(v747, v641);
      stdlib.assert(v933, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:66:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:36:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
        msg: 'you are the boss',
        who: 'Checkin_isPresent'
        });
      const v935 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v932), null);
      let v936;
      switch (v935[0]) {
        case 'None': {
          const v937 = v935[1];
          v936 = false;
          
          break;
          }
        case 'Some': {
          const v938 = v935[1];
          v936 = true;
          
          break;
          }
        }
      stdlib.assert(v936, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:65:36:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:65:36:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
        msg: 'yep',
        who: 'Checkin_isPresent'
        });
      ;
      let v972;
      switch (v935[0]) {
        case 'None': {
          const v973 = v935[1];
          v972 = false;
          
          break;
          }
        case 'Some': {
          const v974 = v935[1];
          v972 = true;
          
          break;
          }
        }
      stdlib.assert(v972, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:67:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:23:application call to [unknown function] (defined at: ./index.rsh:68:23:function exp)'],
        msg: 'yep',
        who: 'Checkin_isPresent'
        });
      const v977 = true;
      const v978 = await txn1.getOutput('Checkin_isPresent', 'v977', ctc7, v977);
      if (v464) {
        stdlib.protect(ctc0, await interact.out(v919, v978), {
          at: './index.rsh:65:11:application',
          fs: ['at ./index.rsh:65:11:application call to [unknown function] (defined at: ./index.rsh:65:11:function exp)', 'at ./index.rsh:69:10:application call to "k" (defined at: ./index.rsh:68:23:function exp)', 'at ./index.rsh:68:23:application call to [unknown function] (defined at: ./index.rsh:68:23:function exp)'],
          msg: 'out',
          who: 'Checkin_isPresent'
          });
        }
      else {
        }
      
      ;
      await stdlib.mapSet(map0, v932, undefined /* Nothing */);
      await stdlib.mapSet(map1, v932, null);
      const v990 = stdlib.sub(v659, stdlib.checkedBigNumberify('./index.rsh:74:39:decimal', stdlib.UInt_max, '1'));
      const v2641 = v990;
      return;
      
      break;
      }
    case 'Status_seeStatus0_84': {
      const v1003 = v748[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Checkin_timesUp4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Checkin_timesUp4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Checkin_timesUp4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v641, v642, v657, v659] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v1089 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:85:7:application',
    fs: ['at ./index.rsh:85:7:application call to [unknown function] (defined at: ./index.rsh:85:7:function exp)', 'at ./index.rsh:84:33:application call to [unknown function] (defined at: ./index.rsh:84:33:function exp)'],
    msg: 'in',
    who: 'Checkin_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v641, v642, v657, v659, v1089],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:85:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1091], secs: v1093, time: v1092, didSend: v601, from: v1090 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Checkin_timesUp"
        });
      ;
      const v1094 = true;
      const v1095 = await txn1.getOutput('Checkin_timesUp', 'v1094', ctc5, v1094);
      
      const v2652 = stdlib.mul(v659, v642);
      sim_r.txns.push({
        kind: 'from',
        to: v641,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v1091], secs: v1093, time: v1092, didSend: v601, from: v1090 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1094 = true;
  const v1095 = await txn1.getOutput('Checkin_timesUp', 'v1094', ctc5, v1094);
  stdlib.protect(ctc0, await interact.out(v1091, v1095), {
    at: './index.rsh:85:7:application',
    fs: ['at ./index.rsh:85:7:application call to [unknown function] (defined at: ./index.rsh:85:7:function exp)', 'at ./index.rsh:86:8:application call to "k" (defined at: ./index.rsh:85:7:function exp)', 'at ./index.rsh:84:33:application call to [unknown function] (defined at: ./index.rsh:84:33:function exp)'],
    msg: 'out',
    who: 'Checkin_timesUp'
    });
  
  const v2652 = stdlib.mul(v659, v642);
  ;
  return;
  
  
  
  };
export async function _Status_seeStatus4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Status_seeStatus4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Status_seeStatus4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Data({
    Attendee_isGoingToBePresent0_84: ctc4,
    Attendee_seePrice0_84: ctc4,
    Checkin_isPresent0_84: ctc5,
    Status_seeStatus0_84: ctc4
    });
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v641, v642, v657, v659] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v723 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:77:32:application call to [unknown function] (defined at: ./index.rsh:77:32:function exp)', 'at ./index.rsh:44:19:application call to "runStatus_seeStatus0_84" (defined at: ./index.rsh:77:10:function exp)', 'at ./index.rsh:44:19:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'in',
    who: 'Status_seeStatus'
    });
  const v727 = ['Status_seeStatus0_84', v723];
  
  const txn1 = await (ctc.sendrecv({
    args: [v641, v642, v657, v659, v727],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v748], secs: v750, time: v749, didSend: v464, from: v747 } = txn1;
      
      switch (v748[0]) {
        case 'Attendee_isGoingToBePresent0_84': {
          const v751 = v748[1];
          
          break;
          }
        case 'Attendee_seePrice0_84': {
          const v835 = v748[1];
          
          break;
          }
        case 'Checkin_isPresent0_84': {
          const v919 = v748[1];
          
          break;
          }
        case 'Status_seeStatus0_84': {
          const v1003 = v748[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Status_seeStatus"
            });
          ;
          const v1077 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v747), null);
          let v1078;
          switch (v1077[0]) {
            case 'None': {
              const v1079 = v1077[1];
              v1078 = false;
              
              break;
              }
            case 'Some': {
              const v1080 = v1077[1];
              v1078 = true;
              
              break;
              }
            }
          const v1081 = await txn1.getOutput('Status_seeStatus', 'v1078', ctc7, v1078);
          
          const v2665 = v659;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v748], secs: v750, time: v749, didSend: v464, from: v747 } = txn1;
  switch (v748[0]) {
    case 'Attendee_isGoingToBePresent0_84': {
      const v751 = v748[1];
      return;
      break;
      }
    case 'Attendee_seePrice0_84': {
      const v835 = v748[1];
      return;
      break;
      }
    case 'Checkin_isPresent0_84': {
      const v919 = v748[1];
      return;
      break;
      }
    case 'Status_seeStatus0_84': {
      const v1003 = v748[1];
      undefined /* setApiDetails */;
      ;
      const v1077 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v747), null);
      let v1078;
      switch (v1077[0]) {
        case 'None': {
          const v1079 = v1077[1];
          v1078 = false;
          
          break;
          }
        case 'Some': {
          const v1080 = v1077[1];
          v1078 = true;
          
          break;
          }
        }
      const v1081 = await txn1.getOutput('Status_seeStatus', 'v1078', ctc7, v1078);
      if (v464) {
        stdlib.protect(ctc0, await interact.out(v1003, v1081), {
          at: './index.rsh:77:11:application',
          fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:11:function exp)', 'at ./index.rsh:79:10:application call to "k" (defined at: ./index.rsh:78:22:function exp)', 'at ./index.rsh:78:22:application call to [unknown function] (defined at: ./index.rsh:78:22:function exp)'],
          msg: 'out',
          who: 'Status_seeStatus'
          });
        }
      else {
        }
      
      const v2665 = v659;
      return;
      
      break;
      }
    }
  
  
  };
export async function Attendee_isGoingToBePresent(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendee_isGoingToBePresent expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendee_isGoingToBePresent expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Attendee_isGoingToBePresent4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Attendee_seePrice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendee_seePrice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendee_seePrice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Attendee_seePrice4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Checkin_isPresent(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Checkin_isPresent expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Checkin_isPresent expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Checkin_isPresent4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Checkin_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Checkin_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Checkin_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Checkin_timesUp4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Status_seeStatus(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Status_seeStatus expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Status_seeStatus expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Status_seeStatus4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Attendee_isGoingToBePresent()byte`, `Attendee_seePrice()uint64`, `Checkin_isPresent(address)byte`, `Checkin_timesUp()byte`, `Status_seeStatus()byte`],
    pure: [],
    sigs: [`Attendee_isGoingToBePresent()byte`, `Attendee_seePrice()uint64`, `Checkin_isPresent(address)byte`, `Checkin_timesUp()byte`, `Status_seeStatus()byte`]
    },
  appApproval: `BiANAAEEAyggMAj8qpy5AbK82cgL4+S8/wyE9ZeRAQImBAEAAAEBAgAAIjUAMRhBA/gpZEkiWzUBIQdbNQIxGSMSQQAIMQAoK2ZCA8Y2GgAXSUEAdSI1BCM1BkkhCAxAAERJIQkMQAArSSEKDEAAEyEKEkQpNf+AAQM0/1AyA1BCALkhCRJEKTX/KDT/UDIDUEIAqCEIEkQ2GgE1/4ABAjT/UEIAlkkhCwxAAAghCxJEKUIAMYHf3faDARJEKTX/KjT/UDIDUEIAcjYaAhc1BDYaAzYaARdJJQxAAhlJJAxAAFgkEkQkNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/0k1BTX+gATU4BgtNP5QsDIGNP8PRIAJAAAAAAAABEYBsCo1BzQDVwAgNAMhBVs0/zQDIQZbIjIGQgJYSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBVs1/iEEWzX9IQZbNfxJNQU1+4AEFJFA1DT7ULAyBjT9DEQ0+yJVSSEMDEAA3UklDEAARyUSRDEAiAKzVwEBSTX5IlVAAAYiNfpCAAYjNfpCAACACAAAAAAAAAQ2NPoWUQcIULA0+hZRBwg1BzT/NP40/TT8IzIGQgG/SDT7VwEgNfo0+jX5MQA0/xJENPmIAl1XAAFJNfgiVUAABiI190IABiM190IAADT3RDT4IlVAAAYiNfZCAAYjNfZCAAA09kSACQAAAAAAAAPRAbAqNQexIrIBNP6yCCOyEDT5sgezNPkoNPmIAgYiIkxWZjT5KDT5iAH5IyNMVmY0/zT+NP00/CMJIzIGQgEvSSMMQAAjSIAIAAAAAAAAAoI0/hZQsDT+FjUHNP80/jT9NPwjMgZCAQZIMQCIAbVXAAFJNfoiVUAABiI1+UIABiM1+UIAADT5FEQ0/ogBojT6IlVAAAYiNfhCAAYjNfhCAAA0+BREgAkAAAAAAAADDgGwKjUHMQAoMQCIAWcjIkxWZjT/NP40/TT8IwgjMgZCAJ1JIwxAAEMjEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEmouRdLA0/zEAEkQ0/zQDIQVbNAMhBls0AyEEWwgiIzIGQgBUSIGgjQaIAQ4iNAESRDQESSISTDQCEhFESTUFSSJbNf8hB1s1/oAErNEfwzT/FlA0/hZQsDEANP8WUDT+FlAyBhZQKEsBVwA4Z0gjNQEyBjUCQgBjNf81/jX9Nfw1+zX6NP5BACA0+jT7FlA0/BZQNP0WUChLAVcAOGdIJDUBMgY1AkIAMrEisgE0/TT7C7III7IQNPqyB7NCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQwxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAANIK4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                "internalType": "uint256",
                "name": "v642",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v643",
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
                "internalType": "uint256",
                "name": "v642",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v643",
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
        "internalType": "struct T8",
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
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_isGoingToBePresent0_84",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_seePrice0_84",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Checkin_isPresent0_84",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Status_seeStatus0_84",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v748",
                "type": "tuple"
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
                "name": "v1091",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
    "name": "_reach_oe_v1078",
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
    "name": "_reach_oe_v1094",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v642",
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
    "name": "_reach_oe_v782",
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
    "name": "_reach_oe_v977",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Attendee_isGoingToBePresent",
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
    "name": "Attendee_seePrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Checkin_isPresent",
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
    "name": "Checkin_timesUp",
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
    "name": "Status_seeStatus",
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
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
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
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
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
        "internalType": "struct T8",
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
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_isGoingToBePresent0_84",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_seePrice0_84",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Checkin_isPresent0_84",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Status_seeStatus0_84",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v748",
                "type": "tuple"
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
                "name": "v1091",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001b8938038062001b8983398101604081905262000026916200024a565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000143565b620000c0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200013a9291906200016d565b505050620002e7565b81620001695760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017b90620002aa565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f8929150620001fc565b5090565b5b80821115620001f85760008155600101620001fd565b604080519081016001600160401b03811182821017156200024457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025e57600080fd5b6200026862000213565b835181526040601f19830112156200027f57600080fd5b6200028962000213565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002bf57607f821691505b60208210811415620002e157634e487b7160e01b600052602260045260246000fd5b50919050565b61189280620002f76000396000f3fe6080604052600436106100bd5760003560e01c80633bc5b7bf11610079578063a98bf22311610056578063a98bf2231461018d578063ab53f2c6146101a0578063cadc2e7a146101c3578063f89f0509146101e357005b80633bc5b7bf146101435780634e63410614610170578063832307571461017857005b80630b3c6c69146100c65780631e93b0f1146100ee5780632c10a1591461010d5780632e9bbd6c14610120578063337aa538146101335780633a1a51171461013b57005b366100c457005b005b6100d96100d436600461139b565b6101eb565b60405190151581526020015b60405180910390f35b3480156100fa57600080fd5b506003545b6040519081526020016100e5565b6100c461011b3660046113d7565b61022f565b6100c461012e3660046113f3565b610253565b6100ff610273565b6100d96102a3565b34801561014f57600080fd5b5061016361015e36600461139b565b6102d0565b6040516100e5919061141b565b6100d96102fc565b34801561018457600080fd5b506001546100ff565b6100c461019b3660046113d7565b61032b565b3480156101ac57600080fd5b506101b561034b565b6040516100e5929190611454565b3480156101cf57600080fd5b506101636101de36600461139b565b6103e8565b6100d961040e565b60006101f56111c2565b60208101805151600290525151606001516001600160a01b038416905261021a611218565b610224828261043e565b604001519392505050565b610237611218565b61024f6102493684900384018461155a565b82610b91565b5050565b61025b611218565b61024f61026d36849003840184611590565b8261043e565b600061027d6111c2565b6020810151516001905261028f611218565b610299828261043e565b6020015192915050565b60006102ad6111c2565b602081015151600090526102bf611218565b6102c9828261043e565b5192915050565b60408051606081018252600080825260208201819052918101919091526102f682610d35565b92915050565b6000610306611246565b602081015160009052610317611218565b6103218282610e0e565b6060015192915050565b610333611218565b61024f6103453684900384018461165a565b82610e0e565b600060606000546002808054610360906116b2565b80601f016020809104026020016040519081016040528092919081815260200182805461038c906116b2565b80156103d95780601f106103ae576101008083540402835291602001916103d9565b820191906000526020600020905b8154815290600101906020018083116103bc57829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102f682610fd5565b60006104186111c2565b6020810151516003905261042a611218565b610434828261043e565b6080015192915050565b61044e6004600054146015611062565b815161046990158061046257508251600154145b6016611062565b60008080556002805461047b906116b2565b80601f01602080910402602001604051908101604052809291908181526020018280546104a7906116b2565b80156104f45780601f106104c9576101008083540402835291602001916104f4565b820191906000526020600020905b8154815290600101906020018083116104d757829003601f168201915b505050505080602001905181019061050c9190611766565b905061058e604080516101608101825260006101008201818152610120830182905261014083018290528252602080830182905282840182905283518082018552828152606080850191909152845190810185528281529081018290529283015290608082019081526000602082018190526040820181905260609091015290565b61059f826040015143106017611062565b7f272ac9552cc7b56f80ebabec842ef459ec995646082a8181b6a64d077f3c1cf633856040516105d0929190611782565b60405180910390a160006020850151515160038111156105f2576105f2611405565b14156107a65761060133610d35565b81526000815151600181111561061957610619611405565b141561062b576000602082015261064f565b6001815151600181111561064157610641611405565b141561064f57600160208201525b61066c8160200151610662576001610665565b60005b600c611062565b61067d82602001513414600d611062565b6000815151600181111561069357610693611405565b14156106a557600060408201526106c9565b600181515160018111156106bb576106bb611405565b14156106c957600160408201525b6106e681604001516106dc5760016106df565b60005b600e611062565b604051600181527fe967c9026966deb1364e67beef0be97eb67da721b5c16c7d6b68c04fae35132a9060200160405180910390a16001808452336000908152600460205260409020805462ff00ff19169091179055610743611270565b825181516001600160a01b039091169052602080840151825190910152604080840151825190910152606083015161077d9060019061180e565b60208083018051929092528151600191015251436040909101526107a081611087565b50610b8b565b60016020850151515160038111156107c0576107c0611405565b141561086f576107d23415600f611062565b7fe30dfcc7ba2933bff73ef56e4af673fd175aeca32d1f7b32d07fd3521f1bc415826020015160405161080791815260200190565b60405180910390a160208083015190840152610821611270565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526060850151828401805191909152805160019301929092529051439101526107a081611087565b600260208501515151600381111561088957610889611405565b1415610ab2576020840151516060908101519082015281516108b7906001600160a01b031633146010611062565b6060810151516108c690610d35565b608082018190525160009060018111156108e2576108e2611405565b14156108f457600060a082015261091b565b6001608082015151600181111561090d5761090d611405565b141561091b57600160a08201525b61092a8160a001516011611062565b61093634156012611062565b6000608082015151600181111561094f5761094f611405565b141561096157600060c0820152610988565b6001608082015151600181111561097a5761097a611405565b141561098857600160c08201525b6109978160c001516013611062565b604051600181527fecd15dfe9c9e4bb3e024409ab194cb4122d74c52b91fb4eeff33af5a65d22aa09060200160405180910390a16001604080850191909152606082015151602084015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610a15573d6000803e3d6000fd5b50606081018051516001600160a01b039081166000908152600460209081526040808320805462ffffff19169055845151841683526005909152808220805460ff19166001179055925151909116815220805462ff000019169055610a78611270565b825181516001600160a01b039091169052602080840151825190910152604080840151825190910152606083015161077d90600190611826565b6003602085015151516003811115610acc57610acc611405565b1415610b8b57610ade34156014611062565b6000610ae933610fd5565b516001811115610afb57610afb611405565b1415610b0d57600060e0820152610b38565b6001610b1833610fd5565b516001811115610b2a57610b2a611405565b1415610b3857600160e08201525b7fb20fd2becc995896e38609ce089fdcd4469d450654095b998227c1c2b46914f18160e00151604051610b6f911515815260200190565b60405180910390a160e081015115156080840152610821611270565b50505050565b610ba1600160005414600a611062565b8151610bbc901580610bb557508251600154145b600b611062565b600080805560028054610bce906116b2565b80601f0160208091040260200160405190810160405280929190818152602001828054610bfa906116b2565b8015610c475780601f10610c1c57610100808354040283529160200191610c47565b820191906000526020600020905b815481529060010190602001808311610c2a57829003601f168201915b5050505050806020019051810190610c5f9190611766565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a1610cb634156008611062565b8051610cce906001600160a01b031633146009611062565b610cd6611270565b815181516001600160a01b03909116905260208083015182519091015260408201516060830151610d07919061180e565b81516040908101919091526020808301805160009052805160019201919091525143910152610b8b81611087565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610d8157610d81611405565b1415610dfe576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610dc257610dc2611405565b6001811115610dd357610dd3611405565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610e1e6004600054146019611062565b8151610e39901580610e3257508251600154145b601a611062565b600080805560028054610e4b906116b2565b80601f0160208091040260200160405190810160405280929190818152602001828054610e77906116b2565b8015610ec45780601f10610e9957610100808354040283529160200191610ec4565b820191906000526020600020905b815481529060010190602001808311610ea757829003601f168201915b5050505050806020019051810190610edc9190611766565b9050610ef08160400151431015601b611062565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a1610f4434156018611062565b604051600181527ff910c4baf35cc7aff398eef490c107e2a3db0dbd3b5fc087d3bf4ee4db32caa49060200160405180910390a160016060830152610f87611270565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152606084015182840180519190915280516000930192909252905143910152610b8b81611087565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561102157611021611405565b1415610dfe576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610dc257610dc2611405565b8161024f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b80602001516020015115611157576110c9604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b0316808252825160209081015181840190815284516040908101518186019081528387015151606080880191825260046000554360015583519586019690965292519184019190915251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906111529291906112b7565b505050565b8051805160209182015191830151516001600160a01b03909116916108fc91611180919061183d565b6040518115909202916000818181858888f193505050501580156111a8573d6000803e3d6000fd5b50600080805560018190556111bf9060029061133b565b50565b6040518060400160405280600081526020016112136040805160c08101825260006020808301828152838501839052606084018390528451918201909452818152608083015260a082015290815290565b905290565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b60405180604001604052806000815260200161121360405180602001604052806000151581525090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b8280546112c3906116b2565b90600052602060002090601f0160209004810192826112e5576000855561132b565b82601f106112fe57805160ff191683800117855561132b565b8280016001018555821561132b579182015b8281111561132b578251825591602001919060010190611310565b50611337929150611371565b5090565b508054611347906116b2565b6000825580601f10611357575050565b601f0160209004906000526020600020908101906111bf91905b5b808211156113375760008155600101611372565b6001600160a01b03811681146111bf57600080fd5b6000602082840312156113ad57600080fd5b81356113b881611386565b9392505050565b6000604082840312156113d157600080fd5b50919050565b6000604082840312156113e957600080fd5b6113b883836113bf565b600060c082840312156113d157600080fd5b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061143257611432611405565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b818110156114885785810183015185820160600152820161146c565b8181111561149a576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff811182821017156114e257634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156114e257634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156114e257634e487b7160e01b600052604160045260246000fd5b80358015158114610e0957600080fd5b60006040828403121561156c57600080fd5b6115746114b1565b823581526115846020840161154a565b60208201529392505050565b600081830360c08112156115a357600080fd5b6115ab6114b1565b8335815260a0601f19830112156115c157600080fd5b6115c96114e8565b6115d1611519565b6020860135600481106115e357600080fd5b81526115f16040870161154a565b60208201526116026060870161154a565b60408201526020607f198501121561161957600080fd5b6116216114e8565b9350608086013561163181611386565b84526060810184905261164660a0870161154a565b608082015281526020820152949350505050565b6000818303604081121561166d57600080fd5b6116756114b1565b833581526020601f198301121561168b57600080fd5b6116936114e8565b91506116a16020850161154a565b825260208101919091529392505050565b600181811c908216806116c657607f821691505b602082108114156113d157634e487b7160e01b600052602260045260246000fd5b6000608082840312156116f957600080fd5b6040516080810181811067ffffffffffffffff8211171561172a57634e487b7160e01b600052604160045260246000fd5b8060405250809150825161173d81611386565b808252506020830151602082015260408301516040820152606083015160608201525092915050565b60006080828403121561177857600080fd5b6113b883836116e7565b6001600160a01b038381168252825160208084019190915283015151805160e08401929190600481106117b7576117b7611405565b80604086015250602081015115156060850152604081015115156080850152816060820151511660a08501526080810151151560c085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611821576118216117f8565b500190565b600082821015611838576118386117f8565b500390565b6000816000190483118215151615611857576118576117f8565b50029056fea26469706673582212208ad13d699b6c22b1fca05444ced7eaf8c57680a281d86cf55e09ba77a619c54564736f6c634300080c0033`,
  BytecodeLen: 7049,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:33:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:93:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:44:19:after expr stmt semicolon',
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
  "Admin": Admin,
  "Attendee_isGoingToBePresent": Attendee_isGoingToBePresent,
  "Attendee_seePrice": Attendee_seePrice,
  "Checkin_isPresent": Checkin_isPresent,
  "Checkin_timesUp": Checkin_timesUp,
  "Status_seeStatus": Status_seeStatus
  };
export const _APIs = {
  Attendee: {
    isGoingToBePresent: Attendee_isGoingToBePresent,
    seePrice: Attendee_seePrice
    },
  Checkin: {
    isPresent: Checkin_isPresent,
    timesUp: Checkin_timesUp
    },
  Status: {
    seeStatus: Status_seeStatus
    }
  };
