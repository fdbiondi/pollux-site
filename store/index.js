export const state = () => ({
  colorful: 0,
})

export const getters = {
  colorful: (state) => {
    return state.colorful
  },
}

export const mutations = {
  bonus(state) {
    state.colorful++
  },
}
