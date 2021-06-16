

  export const state = () => ({
    contact: {},
    menus:[]
  })

  export const mutations = {
    setContact (state,data) {
        state.contact = data
    },
    setMenu (state,data) {
      state.menus = data
    }
  }
  