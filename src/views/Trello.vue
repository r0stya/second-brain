<template>
  <div class="dragAndDrop">
    <div class="wrapper-list">
      <div class="task-list">
        <div class="task-list__header">
          <h3>ToDo</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
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
    <ModalTrello />
  </div>
</template>

<script>
import ModalTrello from "@/components/ModalTrello.vue";

export default {
  name: "Trello",
  components: {
    ModalTrello
  },
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
