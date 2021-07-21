import httpClient from '@/api/httpClient'
import {getKeyByValue} from '@/helpers/common.js'

export default {
  state: {
    columnsMap: {
      '0': 'hold',
      '1': 'progress',
      '2': 'review',
      '3': 'approved'
    },
    cards: {
      hold : [],
      progress: [],
      review: [],
      approved: [],
    }
  },

  getters: {
    allRows: state => state.cards,
    getColumnsMap: state => state.columnsMap,
  },

  mutations: {
    createCard: (state, newCard) => {
      const type = state.columnsMap[newCard.row]
      state.cards[type].push(newCard)
    }
  },

  actions: {
    getCards: async (ctx) => {
      const res = await httpClient.get('api/v1/cards/')
      const cards = res.data
      console.log(cards)
      cards.map(card => ctx.commit('createCard', card))
    },
    addCardAction: async (ctx, payload) => {
      try {
        const res = await httpClient.post('api/v1/cards/', {
          text: payload.text,
          row: getKeyByValue(ctx.getters.getColumnsMap, payload.row)
        });
        const card = res.data;
        ctx.commit('createCard', card);
      } catch(err) {
        console.log(err)
      }
    }
  },

}