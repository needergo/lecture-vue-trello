import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//Store생성
const store = new Vuex.Store({
  state: {
    isAddBoard: false,
  },
});

export default store;
