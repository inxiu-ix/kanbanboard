import httpClient from '@/api/httpClient';
import { getKeyByValue } from '@/helpers/common.js';

export default {
  state: {
    columnsMap: {
      0: 'hold',
      1: 'progress',
      2: 'review',
      3: 'approved',
    },
    cards: {
      hold: [],
      progress: [],
      review: [],
      approved: [],
    },
  },

  getters: {
    allRows: (state) => state.cards,
    getColumnsMap: (state) => state.columnsMap,
  },

  mutations: {
    createCard: (state, newCard) => {
      const type = state.columnsMap[newCard.row];
      state.cards[type].push(newCard);
    },
    deleteCard: (state, card) => {
      const type = state.columnsMap[card.row];
      const index = state.cards[type].indexOf(card)

      state.cards[type].splice(index, 1);
    },
    updateCard: (state, payload) => {
     const index = state.cards[payload.type].indexOf(payload.card);
     payload.card.row = payload.row
     state.cards[payload.type][index] = payload.card
    }
  },

  actions: {
    getCards: async (ctx) => {
      const res = await httpClient.get('api/v1/cards/');
      const cards = res.data;
      cards.map((card) => ctx.commit('createCard', card));
    },
    addCardAction: async (ctx, payload) => {
      try {
        const res = await httpClient.post('api/v1/cards/', {
          text: payload.text,
          row: getKeyByValue(ctx.getters.getColumnsMap, payload.row),
        });
        const card = res.data;
        ctx.commit('createCard', card);
      } catch (err) {
        console.log(err);
      }
    },
    removeCard: async (ctx, payload) => {
      try {
         await httpClient.delete(`api/v1/cards/${payload.id}/`);
        ctx.commit('deleteCard', payload);
      } catch (err) {
        console.log(err);
      }
      console.log('>>', payload);
    },

    updateCard: async (ctx, payload) => {
      try {
        const row = getKeyByValue(ctx.getters.getColumnsMap, payload.type);
        const res = await httpClient.patch(`api/v1/cards/${payload.card.id}/`, {
          row,
          seq_num: payload.card.seq_num,
          text: payload.card.text,
        });
        console.log('res >>>', res);
        console.log('store >>>', ctx.state)
        ctx.commit('updateCard', {card: payload.card, row, type: payload.type});
      } catch (err) {
        console.log(err);
      }
    },
  },
};
