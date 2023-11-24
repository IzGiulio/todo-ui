<template>
  <main>
    <div class="top-container">
      <div class="header">
        <ModalTodoCreator v-if="showModal" @closeModal="onCloseModal"></ModalTodoCreator>
        <button type="button" class="btn float-end btn-primary m-4" @click="onShowModal">Add TODO</button>
      </div>
    </div>
    <div class="center">
      <TodoTable :todos="todos" @onTaskDone="onTaskDone"></TodoTable>
    </div>
  </main>
</template>

<script setup lang="ts">
import TodoTable from "@/components/TodoTable.vue";
import ModalTodoCreator from "@/components/ModalTodoCreator.vue";
import {onMounted, ref} from "vue";
import TodoService from "@/services/TodoService";
import type Todo from "@/objects/Todo";

const todos = ref([] as Todo[])
const showModal = ref(false)

onMounted(async () => {
  todos.value = await TodoService.getTodos()
})

async function onTaskDone(id: number, index: number) {
  if (await TodoService.deleteTodo(id) === 200)
    todos.value.splice(index, 1)
}

function onShowModal() {
  showModal.value = !showModal.value
}

async function onCloseModal(title: string | undefined, description: string | undefined, dueDate: Date | undefined) {
  showModal.value = false
  if (title) {
    const responseStatus = await TodoService.saveTodo(title, description, dueDate)
    if (responseStatus === 200) {
      todos.value = await TodoService.getTodos()
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  z-index: 1;
//font-family: 'Brush Script MT', cursive;
}

.center {
  margin: 60px auto auto;
  width: 50%;
}

</style>
