const mutations = {
  ACCEPT() {
    window.localStorage.setItem('accept_cookies', true)
  },

  REJECT() {
    window.localStorage.setItem('accept_cookies', false)
  },
}

export default mutations
