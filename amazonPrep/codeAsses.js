function billFor(month, activeSubscription, users) {
    var dailyRate = activeSubscription.monthlyPriceInDollars / lastDayOfMonth(new Date(month)).getDate()
    var total = users.length * dailyRate * lastDayOfMonth(new Date(month)).getDate()
    return total
  }
  console.log(billFor('2019-01',{
    id: 1,
    customerId: 1,
    monthlyPriceInDollars: 4,  // price per active user per month
  },[
    {
      id: 1,
      name: "Employee #1",
      customerId: 1,
  
      // when this user started
      activatedOn: new Date("2018-11-04"),
  
      // last day to bill for user
      // should bill up to and including this date
      // since user had some access on this date
      deactivatedOn: new Date("2019-01-10")
    },
    {
      id: 2,
      name: "Employee #2",
      customerId: 1,
  
      // when this user started
      activatedOn: new Date("2018-12-04"),
  
      // hasn't been deactivated yet
      deactivatedOn: null
    },
  ] ))
  
  /*******************
  * Helper functions *
  *******************/
  
  /**
    Takes a Date instance and returns a Date which is the first day
    of that month. For example:
  
    firstDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 1)
  
    Input type: Date
    Output type: Date
  **/
  function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1)
  }
  
  /**
    Takes a Date object and returns a Date which is the last day
    of that month. For example:
  
    lastDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 28)
  
    Input type: Date
    Output type: Date
  **/
  function lastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
  }
  
  /**
    Takes a Date object and returns a Date which is the next day.
    For example:
  
    nextDay(new Date(2019, 2, 7))  // => new Date(2019, 2, 8)
    nextDay(new Date(2019, 2, 28)) // => new Date(2019, 3, 1)
  
    Input type: Date
    Output type: Date
  **/
  function nextDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
  }