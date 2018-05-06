<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p><strong>{{ foo }}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'archive',
  data () {
    return {
      msg: 'this is the archive page',
      foo: 'some other output'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
