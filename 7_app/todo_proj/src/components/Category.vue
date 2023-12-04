<template>
  <h1 class="mt-3"> ToDo List ({{ category }}) </h1>
  <div class="row my-3">
    <div class="col-8">
      <input class="form-control" type="text" v-model="input">
    </div>
    <div class="col-4">
      <button type="button" class="btn btn-primary" @click="add_task"> 追加 </button>
    </div>
  </div>
  <div class="row" :style="{height: '600px'}">
    <div class="col-6 pe-4 border-end border-1 border-dark">
      <Todo title="ToDo" button_name="Done" :done_flag="false" :categoryN="category"/>
    </div>
    <div class="col-6">
      <Todo title="Done" button_name="ToDo" :done_flag="true" :categoryN="category"/>
    </div>
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  name: 'Category',
  components: {
    Todo
  },
  props: {
    category: String
  },
  data() {
    return {
      input: ""
    }
  },
  methods: {
    add_task(){
        this.$store.commit("add_task", {category: this.category, input: this.input})
        this.input = ""
      }
  }
}
</script>
