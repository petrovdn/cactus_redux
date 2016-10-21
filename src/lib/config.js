module.exports = {
  SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
  backend: {
    hapiRemote: true,
    hapiLocal: false
  },
  HAPI: {
    local: {
      url: 'http://localhost:8080'
    },
    remote: {
      url: 'http://606ep.ru:8080'
    }
  },
  COLOR_SCHEME: {
    SCHEME_CURRENT: {
      COLOR_NAVBAR: 'rgb(252, 100, 75)',
      COLOR_BACK: 'rgb(240, 240, 240)',
      COLOR_BUTTON1: 'rgb(36, 208, 138)',
      COLOR_BUTTON2: 'rgb(36, 208, 138)'
    },
    SCHEME_2: {
      COLOR_NAVBAR: 'rgb(50, 140, 251)',
      COLOR_BACK: 'rgb(240, 240, 240)',
      COLOR_BUTTON1: 'rgb(36, 207, 87)',
      COLOR_BUTTON2: 'rgb(196, 196, 196)'
    },
    SCHEME3: {
      COLOR_NAVBAR: 'rgb(165, 28, 199)',
      COLOR_BACK: 'rgb(195, 180, 198)',
      COLOR_BUTTON1: 'rgb(253, 161, 40)',
      COLOR_BUTTON2: 'rgb(196, 196, 196)'
    },
    SCHEME4: {
      COLOR_NAVBAR: 'rgb(253, 133, 36)',
      COLOR_BACK: 'rgb(253, 174, 98)',
      COLOR_BUTTON1: 'rgb(55, 105, 251)',
      COLOR_BUTTON2: 'rgb(223, 214, 206)'
    },
    SCHEME_5: {
      COLOR_NAVBAR: 'rgb(252, 75, 61)',
      COLOR_BACK: 'rgb(240, 240, 240)',
      COLOR_BUTTON1: 'rgb(177, 169, 69)',
      COLOR_BUTTON2: 'rgb(218, 218, 218)'
    }
  }
}
