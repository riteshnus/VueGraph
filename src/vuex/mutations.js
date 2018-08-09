export const mutations = {
  updateExpList (state, expenses) {
    state.label = Object.keys(expenses).map(ele => new Date(ele).toDateString())
    state.values = Object.values(expenses)
  }
}
