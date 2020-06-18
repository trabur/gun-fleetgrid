let gun = new Gun({
  fleetgrid: {
    library: ht,         // pass in headteam
    vehicle: 'ABC',      // license plate
    lane: '1234567890',  // road or channel
    // token: '...'      // toggle between highway and driveway
  }
})

function testPut() {
  gun.get('test').put({
    hello: "world",
    welcome: "earth"
  })
}

function testGet() {
  gun.get('test').once((value) => {
    console.log('get', value)
  })
}