// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(callback) {
    return callback.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(callback) {
    return callback.name
  })
}

function exactMatch(drivers, driverObj) {
  return drivers.filter(function(callback) {
    let match = false;

    for (const element in driverObj) {
      match = callback[element] === driverObj[element];
    }
    return match;
  })
}

function exactMatchToList(drivers, driverObj) {
  return exactMatch(drivers, driverObj).map(function(driver) {
    return driver.name;
  })
}
