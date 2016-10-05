module.exports = {
  SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
  backend: {
    hapiRemote: false,
    hapiLocal: true
  },
  HAPI: {
    local: {
      url: 'http://localhost:8080'
    },
    remote: {
      url: 'https://snowflakeserver-bartonhammond.rhcloud.com/'
    }
  }
}
