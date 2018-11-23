<template>
  <section class="section">
    <div class="container">
      <logo/>
      <h1 class="title">
        nuxt-study
      </h1>
      <ul>
        <li
          v-for="post in posts" 
          :key="post.id">

          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img
                    src="https://github.com/MasanoriIwakura.png"
                    alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <nuxt-link :to="`/post/${post.id}`">
                      <strong>{{ post.title }}</strong>
                    </nuxt-link>
                  </p>
                  <p>
                    投稿日：{{ post.date }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {}
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  mounted() {
    this.$store.dispatch('load')
  }
}
</script>
