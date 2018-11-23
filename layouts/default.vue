<template>
  <div>
    <navbar/>
    <nuxt/>
    <bottom/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Bottom from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Bottom
  }
}
</script>
