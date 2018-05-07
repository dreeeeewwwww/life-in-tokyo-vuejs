<template>
  <div>
    <h1>{{ msg }}</h1>

    <div v-for="video in data.videos" :key="video.id" class="row mb-3 pb-3">
      <div class="col-3">
        <h2>{{ video.name }}</h2>
      </div>
      <div v-if="video.id" class="col-9">
        <div class="row">
          <div v-for="content in video.contents" :key="content.id" class="col-3">
            <img :src="content.thumb" class="img-fluid mb-3"/>
            {{ content.title }}
          </div>
        </div>
      </div>
    </div>

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
