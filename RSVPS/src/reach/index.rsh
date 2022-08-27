"reach 0.1";

export const main = Reach.App(() => {
  const Event = Participant('Admin', {
    price: UInt,
    deadline: UInt,
    ready: Fun([], Null),
    informRSVP: Fun([Address], Null),
    informTimeout: Fun([], Null)
  });

  const Attendee = API('Attendee', {
    isGoingToBePresent: Fun([], Bool),
    seePrice: Fun([], UInt)
  });
  const Checkin = API('Checkin', {

    isPresent: Fun([Address], Bool),
    timesUp: Fun([], Bool),
  });
  const Status = API('Status', {

    seeStatus: Fun([], Bool),
  })
    
  init();

  Event.only(() => {
    const price = declassify(interact.price);
    const deadline = declassify(interact.deadline);
  });
  Event.publish(price, deadline);
  commit();
  Event.publish();
  Event.interact.ready();
 
    
  const deadlineBlock = relativeTime(deadline);
  const RSVPs = new Set();
  const Present = new Set();


  const [ keepGoing, howMany] =
    parallelReduce([true, 0])
    .invariant(balance() == howMany * price)
    .invariant(RSVPs.Map.size() == howMany)
    .while( keepGoing )
    .api_(Attendee.isGoingToBePresent, () => {
      check( ! RSVPs.member(this), "not yet" );
      return [ price, (k) => {
        k(true);
        RSVPs.insert(this);
        Event.interact.informRSVP(this);
        
        return [ keepGoing, howMany + 1 ];
      }];
    })
    .api_(Attendee.seePrice, () => {
      return [ 0, (k) => {
        k(price);
        
        return [ keepGoing, howMany  ];
      }];
    })
    .api_(Checkin.isPresent, (who) => {
      check( this == Event, "you are the boss");
      check( RSVPs.member(who), "yep" );
      return [ 0, (k) => {
        k(true);
        transfer(price).to(who);
        RSVPs.remove(who);
        Present.insert(who);
        
        return [ keepGoing, howMany - 1 ];
      }];
    })
    .api_(Status.seeStatus, () => {
      return [0, (k) => {
        k(Present.member(this))

        return [ keepGoing, howMany];
      }]
    })
    .timeout( deadlineBlock, () => {
      const [ [], k ] = call(Checkin.timesUp);
      k(true);
      Event.interact.informTimeout();
      return [ false, howMany ]
    });
    
  const leftovers = howMany;
  transfer(leftovers * price).to(Event);
  commit();
  exit();
});