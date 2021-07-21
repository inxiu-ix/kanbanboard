


export default {
  actions: {
   },
  mutations: {
    updateProgressCards(state, cards) {
      state.inProgressCards = cards
      console.log('store >>>', state.cards)
    },
    createProgressCard(state, newCard) {
      state.inProgressCards.push(newCard)
    }
  },
  state: {
    inProgressCards: []
  },
  getters: {
    allProgressCards(state) {
      return state.inProgressCards
    }
  },

}