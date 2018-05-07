<template>
  <div class=" hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import data from '../assets/data/videos.json'
export default {
  name: 'video',
  data () {
    return {
      msg: 'Video',
      foo: 'some other output',
      data
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
