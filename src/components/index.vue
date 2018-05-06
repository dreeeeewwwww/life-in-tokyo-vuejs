<template>
  <div class="container">
    <div class="row">
      <div class="col-6 hello">
        <h1>{{ msg }}</h1>
        <p><strong>this is testing scss</strong></p>
        <p><i class="fas fa-allergies"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'FOO!'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
