<template>
  <div class=" hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import data from '../assets/data/images.json'
export default {
  name: 'images',
  data () {
    return {
      msg: 'Images',
      foo: 'some other output',
      data
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
