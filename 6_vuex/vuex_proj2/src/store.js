import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export const store = createStore({
    state() {
        return {
            count: 0,
            msg: "randomN: "
        }
    },
    mutations : {
        plusOne: (state) => {
            state.count++
        },
        minusOne: (state) => {
            state.count--
        },
        plusN: (state, n) => {
            state.count += n
        },
        minusN: (state, n) => {
            state.count -= n
        }
    },
    actions: {
        randomN: (context) => {
            let randomN = Math.floor(Math.random() * 10)
            context.commit('plusN', randomN)
            context.state.msg = "randomN: " + randomN
        }
    },
    plugins: [
        createPersistedState(),
    ],
})