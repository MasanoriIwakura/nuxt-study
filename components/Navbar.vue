<template>
  <nav
    class="navbar is-primary"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link
        class="navbar-item"
        to="/">
        NUXT-STUDY
      </nuxt-link>

      <div
        :class="{'is-active': isMenuActive}"
        class="navbar-burger"
        data-target="navbarBasic"
        @click="toggleMenu">
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </div>
    </div>
      
    <div
      id="navbarBasic"
      :class="{'is-active': isMenuActive}"
      class="navbar-menu">

      <div class="navbar-start">
        <nuxt-link
          class="navbar-item"
          to="/about">
          About
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false
    }
  },
  watch: {
    $route() {
      this.isMenuActive = false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>
