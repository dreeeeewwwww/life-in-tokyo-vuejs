<template>
  <div class="">
    <h1>{{ msg }}</h1>

    <div v-for="image in data.images" :key="image.id" class="row mb-3 pb-3">
      <div class="col-3">
        <h2>{{ image.name }}</h2>
      </div>
      <div v-if="image.name" class="col-9">
        <div class="row">
          <div v-for="content in image.contents" :key="content.id" class="col-3">
            <img :src="'static/images/' + content.src" class="img-fluid mb-3" data-toggle="modal" :data-target="'#modal-' + content.id" />
            {{ content.title }}

            <div class="modal fade video-clip" :id="'modal-' + content.id" tabindex="-1" role="dialog" :aria-labelledby="content.title">
              <div class="modal-dialog modal-dialog-centered modal-lg" >
                <div class="modal-content">
                  <img :src="'static/images/' + content.src" class="img-fluid mb-3" />
                  <p>
                    {{ content.title }}, {{ content.description }}, {{ content.attribution }}
                  </p>
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
