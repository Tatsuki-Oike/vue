<template>
  <h1> ToDo List </h1>
  <div class="row my-3">
    <div class="col-8">
      <input class="form-control" type="text" v-model="input">
    </div>
    <div class="col-4">
      <button type="button" class="btn btn-primary" v-on:click="add_todo"> 追加 </button>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <ToDoList title="ToDo" v-bind:todo_list="todo_list" button_name="Done" v-bind:done_flag="false"/>
    </div>
    <div class="col-6">
      <ToDoList title="Done" v-bind:todo_list="todo_list" button_name="ToDo" v-bind:done_flag="true"/>
    </div>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  },
  data(){
      return {
          input: "",
          todo_list: [],
      }
  },
  methods: {
    add_todo(){
          this.todo_list.push(
            {
              "id": crypto.randomUUID(),
              "task": this.input,
              "done": false,
            }
          )
          this.input = ""
      }
  }
}
</script>
