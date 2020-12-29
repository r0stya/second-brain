<template>
  <div id="app">
    <Navigation />
    <router-view id="content" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
export default {
  name: "App",
  components: {
    Navigation
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
#content{
  margin-left: 140px;
}
</style>
