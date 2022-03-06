const getters = {
  cookiesAccepted() {
    if (process.client) {
      return Boolean(window.localStorage?.getItem('accept_cookies'))
    }

    return false
  },
}

export default getters
