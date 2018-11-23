import Vuex from 'vuex'

const store = () =>
  new Vuex.Store({
    state: {
      posts: []
    },
    mutations: {
      set(state, items) {
        state.posts = items
      }
    },
    actions: {
      load(ctx) {
        // この部分をDBやMarkdownファイルから持ってくるようにしたい
        const items = [
          {
            id: 1,
            title: '投稿１',
            date: '2018/11/1',
            contents: 'テストページ１<br>aaa<br>bbb'
          },
          {
            id: 2,
            title: '投稿２',
            date: '2018/11/10',
            contents: 'テストページ2<br>aaa<br>bbb'
          },
          {
            id: 3,
            title: '投稿３',
            date: '2018/11/23',
            contents: 'テストページ3<br>aaa<br>bbb'
          }
        ]
        ctx.commit('set', items)
      }
    }
  })

export default store
