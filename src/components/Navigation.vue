<template>
  <div class="nav">
    <div class="nav__title">
      <h2>MENU</h2>
    </div>
    <router-link class="nav__btn nav__btn__active" :to="{ name: 'Home' }"
      ><i class="bi bi-house-door"></i>Home</router-link
    >
    <router-link class="nav__btn" :to="{ name: 'Trello' }"
      ><i class="bi bi-list-check"></i>Trello</router-link
    >
  </div>
</template>
<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/nav.scss";
</style>
