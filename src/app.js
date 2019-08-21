const Mastodon = require('megalodon').default;

const BASE_URL = process.env.INSTANCE
const access_token = process.env.ACCESS_TOKEN
const target_account = process.env.TARGET_ACCOUNT

const client = new Mastodon(access_token, BASE_URL + '/api/v1')
const stream = client.stream('/streaming/user')
var text=target_account

stream.on('update', status => {
  if(status.media_attachments.length != 0){
    console.log(status.url)
    text = target_account + " " + status.url
    client.post('/statuses', {
      status: text,
      visibility: "direct"
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
})
