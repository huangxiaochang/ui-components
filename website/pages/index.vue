<template>
  <div class="banner">
    <div class="banner-desc">
      <h1>{{ langConfig[1] }}</h1>
      <p>{{ langConfig[2] }}</p>
    </div>
  </div>
</template>

<script>
import pageLang from '../i18n/page.json'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      lang: this.$route.meta.lang,
    }
  },
  computed: {
    langConfig() {
      return pageLang.filter(config => config.lang === this.lang)[0].pages.index
    },
  },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
  .banner {
  text-align: center;
  margin-bottom: 300px;
}
.banner-desc {
  padding-top: 30px;

  h1 {
    font-size: 34px;
    margin: 0;
    line-height: 48px;
    color: #555;
  }

  p {
    font-size: 18px;
    line-height: 28px;
    color: #888;
    margin: 20px 0 5px;
  }
}
</style>

