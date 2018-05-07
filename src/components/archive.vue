<template>
  <div>

    <h1 class="mb-3 pb-3">{{ msg }}</h1>
    <div v-for="archive in data.archives" :key="archive.id" class="row mb-3 pb-3">
      <div class="col-3">
        <h2>{{ archive.name }}</h2>
      </div>
      <div class="col-9">
        <div class="row">
          <div v-for="content in archive.contents" :key="content.id" class="col-3">
            <img :src="content.img_thumb" class="img-fluid mb-3"/>
            {{ content.title }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import data from '../assets/data/archives.json'
export default {
  data () {
    return {
      msg: 'Archive',
      data
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
