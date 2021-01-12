<template>
  <div class="modal-trello">
    <div class="modal-content">
      <h2 class="modal-content__title">Creating new card</h2>
      <textarea
        class="modal-content__textarea"
        name=""
        id=""
        resize="none"
      ></textarea>
      <div class="modal-content__buttons">
        <button class="modal-content__btn_danger">Cansel</button>
        <button class="modal-content__btn_primary">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalTrello"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/modal-trello.scss";
</style>
