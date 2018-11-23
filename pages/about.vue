<template>
  <section class="section">
    <div class="container">
      <h1 class="title">About</h1>
      <h2 class="subtitle">このサイトについて</h2>
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img
              src="~/static/image/my-cat.jpg"
              alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://github.com/MasanoriIwakura.png"
                  alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">
                <a
                  href="https://github.com/MasanoriIwakura"
                  target="_blank">
                  Masanori Iwakura
                </a>
              </p>
              <p class="subtitle is-6">@MasanoriIwakura</p>
            </div>
          </div>

          <div class="content">
            Nuxt.jsを使用したブログを作成するための叩き台として作成しました。<br>
            やっぱり記事書くならMarkdownですね。
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
