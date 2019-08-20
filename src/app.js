// console.log('Hello, World')
const Mastodon = require('megalodon').default;

const BASE_URL = process.env.INSTANCE

const access_token = process.env.ACCESS_TOKEN

const client = new Mastodon(access_token, BASE_URL + '/api/v1')

const stream = client.stream('/streaming/user')
// stream.on('connect', event => {
//   console.log('connect')
// })

stream.on('update', status => {
  console.log(status)
})
