<template>
  <div>

    <h1 class="mb-3 pb-3">{{ msg }}</h1>
    <div v-for="archive in data.archives" :key="archive.id" class="row mb-3 pb-3">
      <div class="col-3">
        <h2>{{ archive.name }}</h2>
      </div>
      <div v-if="archive.id !== 'tour-history'" class="col-9">
        <div class="row">
          <div v-for="content in archive.contents" :key="content.id" class="col-3">
            <img :src="content.img_thumb" class="img-fluid mb-3"/>
            {{ content.title }}
          </div>
        </div>
      </div>
      <div v-else-if="archive.id === 'tour-history'" class="col-9">
        <p v-html="archive.body" class="mb-3 pb-3"></p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"><i class="far fa-calendar"></i></th>
              <th scope="col"><i class="fas fa-location-arrow"></i></th>
              <th scope="col"><i class="fas fa-map-marker-alt"></i></th>
              <th scope="col"><i class="far fa-sticky-note"></i></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="content in archive.contents" :key="content.id">
              <td>{{ content.month }}/{{ content.day }}/{{ content.year }}</td>
              <td>{{ content.venue }}</td>
              <td>{{ content.city_country }}</td>
              <td class="text-grey-9">{{ content.excerpt }}</td>
            </tr>
          </tbody>
        </table>
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
