(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(t,s,n){"use strict";n.r(s);n(29),n(30),n(16);var e={data:function(){return{post:null}},mounted:function(){var t=!0,s=!1,n=void 0;try{for(var e,o=this.$store.state.posts[Symbol.iterator]();!(t=(e=o.next()).done);t=!0){var i=e.value;i.id==this.$route.params.id&&(this.post=i)}}catch(t){s=!0,n=t}finally{try{t||null==o.return||o.return()}finally{if(s)throw n}}this.post||this.$router.push("/")}},o=n(10),i=Object(o.a)(e,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"section"},[t.post?n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.post.contents)}})]):t._e()])},[],!1,null,null,null);i.options.__file="_id.vue";s.default=i.exports}}]);