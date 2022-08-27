import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib({ REACH_NO_WARN: 'Y' });
const sbal = stdlib.parseCurrency(100);
const accD = await stdlib.newTestAccount(sbal);

const deadline = stdlib.connector === 'CFX' ? 500 : 250;

const ctcD = accD.contract(backend);
//console.log(ctcD);
await stdlib.withDisconnect(() =>
  ctcD.p.Admin({
    deadline,
    price: stdlib.parseCurrency(25),
    ready: stdlib.disconnect
  })
);

const users = await stdlib.newTestAccounts(10, sbal);

const willError = async (f, whoi) => {
  const who = users[whoi];  
  let e;
  try {
    await f();
    e = false;
  } catch (te) {
    e = te;
  }
  if ( e === false ) {
    throw Error(`Expected to error, but didn't`);
  }
  console.log('NO RSVP SLOT FOR', stdlib.formatAddress(who) );
};
const willErrorRepeat = async (f, whoi) => {
    const who = users[whoi];  
    let e;
    try {
      await f();
      e = false;
    } catch (te) {
      e = te;
    }
    if ( e === false ) {
      throw Error(`Expected to error, but didn't`);
    }
    console.log(stdlib.formatAddress(who), 'ALREADY HAS AN RSVP SPOT' );
  };
  const willErrorCheckin = async (f, whoi) => {
    const who = users[whoi];  
    let e;
    try {
      await f();
      e = false;
    } catch (te) {
      e = te;
    }
    if ( e === false ) {
      throw Error(`Expected to error, but didn't`);
    }
    console.log(stdlib.formatAddress(who), 'HAS ALREADY CHECKED IN' );
  };
const ctcWho = (whoi) =>
  users[whoi].contract(backend, ctcD.getInfo());
const rsvp = async (whoi) => {
  const who = users[whoi];
  const ctc = ctcWho(whoi);
  console.log('RSVP of', stdlib.formatAddress(who));
  await ctc.apis.Attendee.isGoingToBePresent();
};
const do_checkin = async (ctc, whoi) => {
  const who = users[whoi];
  console.log('Check in of', stdlib.formatAddress(who));
  await ctc.apis.Checkin.isPresent(who);
};
const checkin = async (whoi) => do_checkin(ctcD, whoi);
const timesup = async () => {
  console.log('I think time is up');
  await ctcD.apis.Checkin.timesUp();
};
const status = async (whoi) => {
  const who = users[whoi];
  const ctc = ctcWho(whoi);
  const y = await ctc.apis.Status.seeStatus();
  //console.log(y)
 if (y) console.log(stdlib.formatAddress(who), ' Succesfully Registered For The Event')
  
  else console.log(stdlib.formatAddress(who), 'Did Not Attend The Event')
}

await rsvp(0)
await rsvp(1) // Not checked in
await rsvp(2)
await rsvp(4)
await rsvp(6)
await rsvp(7) // Not checked in
await willErrorRepeat(() => rsvp(6),6) //attempt to rsvp twice
await checkin(4)
await willError(() => checkin(3),3) // not matching rsvp found
await willError(() => checkin(5),5) // no matching rsvp found
await checkin(0)
await checkin(2)
await checkin(6)
await willErrorCheckin(() => checkin(6),6) // attempt to checkin twice
await status(0)
await status(1)
await status(2)
await status(3)
await status(4)
await status(5)
await status(6)
await status(7)
await status(8)

console.log(`We're gonna wait for the deadline`);
await stdlib.wait(deadline);

await timesup();

for ( const who of [ accD, ...users ]) {
  console.warn(stdlib.formatAddress(who), 'has',
    stdlib.formatCurrency(await stdlib.balanceOf(who)));
}