import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({   // 注意Store的S大写
  state: {
    curTab:0,
  },
  mutations: {
    // changeCurTab: function(state, value){
    //   state.curTab = value;
    // },
    changeCurTab: (state, value) => {
        state.curTab = value;
    }, // 报错
},
})

export default store;
