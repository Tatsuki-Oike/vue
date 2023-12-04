<template>

  <h2> {{ title }} </h2>
  <ul class="list-group">
      <template v-for="task_obj in todo_flag_list(done_flag)">
          <div class="row align-items-center">
            <div class="col-8">
              <li class="list-group-item"> {{task_obj.task}} </li>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-primary my-3" v-on:click="finish(task_obj.id)"> {{button_name}} </button>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger my-3" v-on:click="delete_task(task_obj.id)"> Delete </button>
            </div>
          </div>
      </template>
  </ul>

</template>

<script>
export default {
  name: 'ToDoList',
  props: {
    title: String,
    todo_list: Object,
    button_name: String,
    done_flag: Boolean
    },
  methods: {
      finish(id){
        const target_task = this.todo_list.filter(task => task.id === id)[0]
        target_task.done = !target_task.done
      },
      delete_task(id){
        const target_task = this.todo_list.filter(task => task.id === id)[0]
        const list_id = this.todo_list.indexOf(target_task)
        this.todo_list.splice(list_id, 1)
      }
  },
  computed: {
      todo_flag_list(){
          return done_flag => this.todo_list.filter(item => done_flag === item.done)
      }
  }
}
</script>
