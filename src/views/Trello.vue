<template>
  <div class="dragAndDrop">
    <div class="wrapper-list">
      <div class="task-list">
        <div class="task-list__header">
          <h3>ToDo</h3>
        </div>
        <div
          class="task-list__container"
          id="todo-container"
          @dragover.prevent
          @dragenter.prevent="dragEnter"
          @dragleave="dragLeave"
          @drop="dragDrop"
        >
          <div
            class="task-list__item"
            draggable="true"
            @dragstart="dragStart"
            @dragend="dragEnd"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              inventore.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-list">
      <div class="task-list">
        <div class="task-list__header">
          <h3>In Progress</h3>
        </div>
        <div
          class="task-list__container"
          id="in-progress-container"
          @dragover.prevent
          @dragenter.prevent="dragEnter"
          @dragleave="dragLeave"
          @drop="dragDrop"
        ></div>
      </div>
    </div>
    <div class="wrapper-list">
      <div class="task-list">
        <div class="task-list__header">
          <h3>QA</h3>
        </div>
        <div
          class="task-list__container"
          id="qa-container"
          @dragover.prevent
          @dragenter.prevent="dragEnter"
          @dragleave="dragLeave"
          @drop="dragDrop"
        ></div>
      </div>
    </div>
    <div class="wrapper-list">
      <div class="task-list">
        <div class="task-list__header">
          <h3>Done</h3>
        </div>
        <div
          class="task-list__container"
          id="done-container"
          @dragover.prevent
          @dragenter.prevent="dragEnter"
          @dragleave="dragLeave"
          @drop="dragDrop"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trello",
  data: () => ({
    currentOnDrag: null
  }),
  methods: {
    dragStart(e) {
      setTimeout(() => {
        e.target.classList.add("task-list__item__hide");
        this.currentOnDrag = e.target;
      }, 0);
    },
    dragEnd(e) {
      e.target.classList.remove("task-list__item__hide");
      this.currentOnDrag = null;
    },
    dragEnter(e) {
      e.target.classList.add("task-list__item__hovered");
    },
    dragLeave(e) {
      e.target.classList.remove("task-list__item__hovered");
    },
    dragDrop(e) {
      e.target.appendChild(this.currentOnDrag);
      e.target.classList.remove("task-list__item__hovered");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/trello.scss";
</style>
