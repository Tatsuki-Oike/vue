import { createStore} from 'vuex'
// import createPersistedState from "vuex-persistedstate"

export const store = createStore({
    state() {
        return {
            task_list: {
                "学校": [
                    {"task_id": 0, "task": "レポート", "status": false},
                    {"task_id": 1, "task": "課題", "status": false}
                ],
                "家事": [
                    {"task_id": 2, "task": "洗濯", "status": false},
                    {"task_id": 3, "task": "ゴミ捨て", "status": false}
                ],
                "趣味": [
                    {"task_id": 4, "task": "某スパイアニメ見る", "status": false},
                    {"task_id": 5, "task": "英語のドラマ見る", "status": false}
                ],
            }
        }
    },
    mutations : {
        check: (state, {category, id}) => {
            const target_task = state.task_list[category].filter(task => task.task_id === id)[0]
            target_task.status = !target_task.status
        },
        delete_task: (state, {category, id}) => {
            const target_task = state.task_list[category].filter(task => task.task_id === id)[0]
            const list_id = state.task_list[category].indexOf(target_task)
            state.task_list[category].splice(list_id, 1)
        },
        add_task: (state, {category, input}) => {
            state.task_list[category].push(
                {
                  "task_id": crypto.randomUUID(),
                  "task": input,
                  "status": false,
                }
              )
        },
        add_category: (state, input_category) => {
            state.task_list[input_category] = []
        },
        delete_category: (state, input_category) => {
            delete state.task_list[input_category]
        }
    },
    // plugins: [
    //     createPersistedState(),
    // ],
})
