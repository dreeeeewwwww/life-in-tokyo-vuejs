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

            <img :src="'http://img.youtube.com/vi/' + content.embed + '/mqdefault.jpg'" class="img-fluid mb-2" data-toggle="modal" :data-target="'#modal-' + content.embed"/>
            {{ content.title }}

            <div class="modal fade video-clip" :id="'modal-' + content.embed" tabindex="-1" role="dialog" :aria-labelledby="content.title">
              <div class="modal-dialog modal-dialog-centered modal-lg" >
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="embed-responsive embed-4by3">
                      <iframe class="embed-responsive-item" width="560" height="315" :src="'https://www.youtube.com/embed/' + content.embed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <p>
                      {{ content.title }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
