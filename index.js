const {Flint, KeyValAdapter} = require('gun-flint')

const fgGunAdapter = new KeyValAdapter({
  opt: function(context, options) {
    let {fleetgrid} = options
    if (fleetgrid) {
      this.initialized = true
      this.ht = fleetgrid.library.move(fleetgrid.vehicle, fleetgrid.lane)
      console.log('initialized: gun-fleetgrid')
    } else {
      this.initialized = false
    }
  },
  get: function(key, field, done) {
    // console.log('get:key', key)
    // get:key test
    // handle read
    // console.log('initialized:', this.initialized)
    if (this.initialized) {
      this.ht.key(key).find((message) => {
        // console.log('message:', message)
        if (field) {
          // console.log('field:', true)
          done(null, [message.value[field]])
        } else {
          // console.log('field:', false)
          let buffer = []
          for (const property in message.value) {
            buffer.push({field: property, key: key, val: message.value[property]})
          }
          done(null, buffer)
        }
      })
    }
  },
  put: function(node, done) {
    // console.log('put:node', node)
    // put:node [{state: 1589606526747, field: "hello", key: "test", val: "world"}]
    // handle write
    if (this.initialized && node.length) {
      let object = {}
      node.forEach(element => {
        object[element.field] = element.val
      })
      this.ht.key(node[0].key).value(object).post((message) => {
        // console.log('message:', message)
        done()
      })
    }
  }
})

Flint.register(fgGunAdapter)