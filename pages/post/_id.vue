<template>
  <section class="section">
    <div
      v-if="post"
      class="container">
      <h1 class="title">
        {{ post.title }}
      </h1>
      <p v-html="post.contents"/>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      post: null
    }
  },
  mounted() {
    for (let post of this.$store.state.posts) {
      if (post.id == this.$route.params.id) {
        this.post = post
      }
    }
    if (!this.post) {
      // Page Not found.
      this.$router.push('/')
    }
  }
}
</script>
