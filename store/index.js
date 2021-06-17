

  export const state = () => ({
    contact: {},
    menus:[],
    site:{}
  })

  export const mutations = {
    setContact (state,data) {
        state.contact = data
    },
    setMenu (state,data) {
      state.menus = data
    },
    setSite (state,data) {
      state.site = data
    }
  }
  