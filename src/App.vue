<template>
  <div id="app">
    <div class="container">
      <nav class="row">
        <div class="col-6 hello">
          <router-link to="/">
            {{ appTitle }}
          </router-link>
          <router-link
            v-for="item in navItems"
            :key="item.title"
            :to="item.path">
            {{ item.title }}&nbsp;
          </router-link>
        </div>
      </nav>
      <router-view/>
      <footer class="row">
        <div class="col-6 hello">
          <p>Footer <i class="fas fa-allergies"></i></p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // appTitle: 'Life in Tokyo',
      navItems: [
        { title: 'Archive', path: '/archive' },
        { title: 'Biography', path: '/biography' },
        { title: 'Discography', path: '/discography' },
        { title: 'Images', path: '/images' },
        { title: 'Video', path: '/video' }
      ]
    }
  },
  computed: {
    appTitle () {
      return this.$store.state.appTitle
    }
  }
}
</script>
