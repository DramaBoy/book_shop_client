import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
    // {{$store.state.count}}
const state = {
        goodsList: []
    }
    /**
     * 1.mutations 里面放置的是我们操作state对象属性的方法
     */
const mutations = {
        addGoods: (state, data) => {
            state.goodsList.push(data);
        },
        saveId: (state, id) => {
            return (state.id = id)
        },
        mutationsAddCount(state, n = 0) {
            return (state.count += n)
                // localStorage.setItem("key", "value");
        },
        mutationsReduceCount(state, n = 0) {
            return (state.count -= n)
        }
    }
    // 2.actions是异步操作
const actions = {
        actionsAddCount(context, n = 0) {
            console.log(context)
            return context.commit('mutationsAddCount', n)
        },
        actionsCount(context, id) {
            console.log(context)
            return context.commit('saveId', id)
        },
        actionsReduceCount({ commit }, n = 0) {
            return commit('mutationsReduceCount', n)
        }
    }
    // 3.我们一般使用getters来获取我们的state，因为它算是state的一个计算属性
const getters = {
        getterCount(state, n = 0) {
            return (state.count += n)
        }
    }
    // 但是vuex官方给了我们一个更简单的方式来使用vuex， 也就是 {mapState, mapMutations, mapActions, mapGetters}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})