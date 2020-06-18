const {Flint, KeyValAdapter} = require('gun-flint')

const fgGunAdapter = new KeyValAdapter({
  opt: function(context, options) {
    let {fleetgrid} = options
    if (fleetgrid) {
      this.initialized = true
      this.ht = fleetgrid.library.move(fleetgrid.plate, fleetgrid.highway)
      console.log('initialized gun-fleetgrid')
    } else {
      this.initialized = false
    }
  },
  get: function(key, field, done) {
    // console.log('get:key', key)
    // get:key test
    // handle read
    this.ht.key(key).find((message) => {
      // console.log('message:', message)
      done()
    })
  },
  put: function(node, done) {
    // console.log('put:node', node)
    // put:node [{state: 1589606526747, field: "hello", key: "test", val: "world"}]
    // handle write
    let object = {}
    node.forEach(element => {
      object[element.field] = element.val
    })
    this.ht.key(node[0].key).value(object).post((message) => {
      // console.log('message:', message)
      done()
    })
  }
})

Flint.register(fgGunAdapter)