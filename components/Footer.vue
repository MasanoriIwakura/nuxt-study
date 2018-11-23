<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Copyright © {{ year }} MasanoriIwakura All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: null
    }
  },
  mounted() {
    this.year = new Date().getFullYear()
  }
}
</script>
