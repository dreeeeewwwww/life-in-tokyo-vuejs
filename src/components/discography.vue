<template>
  <div class=" hello">
    <h1 class="mb-3 pb-3">{{ msg }}</h1>
    <div v-for="discog in data.discogs" :key="discog.id" class="row mb-3 pb-3">
      <div class="col-12">
        <h2>{{ discog.name }}</h2>
        <p>{{ discog.body }}</p>
      </div>
      <div class="col-12">
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
            <tr v-for="content in discog.contents" :key="content.id">
              <td>{{ content.month }}/{{ content.day }}/{{ content.year }}</td>
              <td>{{ content.title }}</td>
              <td>
                {{ content.id }}
                {{ content.type }}
                {{ content.format }}
                {{ content.band }}
                {{ content.label }}
                {{ content.catalog_number }}
                {{ content.country }}
                {{ content.credits }}
                {{ content.description }}
                {{ content.body }}
                {{ content.url_discogs }}
                {{ content.url_discogs_all }}
              </td>
              <td>
                <p v-for="track in content.tracks" :key="track.id">
                  {{ track.id }} - {{ track.title }} - {{ track.duration }} - {{ track.credit }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/data/discogs.json'
export default {
  name: 'discogs',
  data () {
    return {
      msg: 'Discography',
      data
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
