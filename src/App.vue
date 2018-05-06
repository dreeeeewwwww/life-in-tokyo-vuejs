<template>
  <div id="app">

    <div class="container">
      <div class="row">
        <div class="col-12 hello">
          <nav>
            <ul>
              <li>
                <router-link to="/">
                  {{ appTitle }}
                </router-link>
              <li>
              <li v-for="item in navItems" :key="item.title">
                <router-link

                  :to="item.path">
                  {{ item.title }}
                </router-link>&nbsp;
              </li>

            </ul>
          </nav>
        </div>
      </div>
      <router-view/>
      <div class="row row-bottom-60">
        <div class="col-12">
          <footer>
            <ul>
              <li>footer</li>
              <li>|</li>
              <li>See also: <a id="" href="http://www.nightporter.co.uk" target="_blank">nightporter.co.uk <i class="fa fa-external-link-square"></i></a></li>
            </ul>
            <p>2008-datefoo Life in Tokyo. Original content <i class="fas fa-creative-commons"></i> Attribution-NonCommercial-ShareAlike. <br />All other images, articles and video <i class="fa fa-copyright" aria-hidden="true"></i> their respective owners. For issues concerning the usage of this content please <a href="mailto:">contact us</a>. <br />Life in Tokyo is a fan-created archive and is in no way associated with the artists or their record companies.</p>
          </footer>
        </div>
      </div>
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
        { title: 'Biography', path: '/biography' },
        { title: 'Discography', path: '/discography' },
        { title: 'Images', path: '/images' },
        { title: 'Video', path: '/video' },
        { title: 'Archive', path: '/archive' }
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
