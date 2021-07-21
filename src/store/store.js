import Vue from 'vue'
import Vuex from 'vuex'
import holdCard from '@/store/modules/holdCard'
import inProgressCard from '@/store/modules/inProgressCard'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    holdCard,
    inProgressCard,
  }

})