

  export const state = () => ({
    contact: {},
    menus:[],
    bottomMenu:[],
    site:{}
  })

  export const mutations = {
    setContact (state,data) {
        state.contact = data
    },
    setMenu (state,data) {
      state.menus = data
    },
    setBottomMenu (state,data) {
      state.bottomMenu = data
    },
    setSite (state,data) {
      state.site = data
    }
  }
  