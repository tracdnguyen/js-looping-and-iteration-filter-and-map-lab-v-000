// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(callback) {
    return callback.name;
  })
}

function exactMatch(driver, driverObj) {
  return driver.filter(function(callback) {
    const match = [];

    for (const key in driverObj) {
      match = driver[key] === callback[key]
    }
    return match
  })
}