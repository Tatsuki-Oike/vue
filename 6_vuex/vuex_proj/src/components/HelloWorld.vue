<template>
  <h1> {{ title }} </h1>
  <p> {{ $store.state.message }} </p>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: "HelloWorld.vueのtemplate"
    }
  }
}
</script>
