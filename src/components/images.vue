<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div v-for="image in data.images" :key="image.id" class="col-12">
        <div class="card-columns">
          <div v-for="content in image.contents" :key="content.id" class="card">
            <img :src="'static/images/' + content.src" class="card-img" data-toggle="modal" :data-target="'#modal-' + content.id" />

            <div class="modal fade video-clip" :id="'modal-' + content.id" tabindex="-1" role="dialog" :aria-labelledby="content.title">
              <div class="modal-dialog modal-dialog-centered modal-lg" >
                <div class="modal-content">
                  <div class="modal-body">
                    <img :src="'static/images/' + content.src" class="img-fluid  mb-3" />
                    <p>
                      {{ image.name }}{{ content.title }}, {{ content.description }}, {{ content.attribution }}
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
