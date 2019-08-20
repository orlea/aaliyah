const Mastodon = require('megalodon').default;

const BASE_URL = process.env.INSTANCE
const access_token = process.env.ACCESS_TOKEN
const target_account = process.env.TARGET_ACCOUNT

const client = new Mastodon(access_token, BASE_URL + '/api/v1')
const stream = client.stream('/streaming/user')

stream.on('update', status => {
  if(status.media_attachments.length != 0){
    console.log(status.url)

    client.post('/statuses', {
      status: status.url,
      visibility: "direct",
      mention: {acct: target_account}
    })
  }
})
