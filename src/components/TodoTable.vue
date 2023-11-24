<template>
  <div class="card mb-1" v-for="(todo, index) in todos as Todo[]" :key="todo.id">
    <div class="content">
      <h5 class="title">{{ todo.name }}</h5>
      <h6 class="description">{{ todo.description }}</h6>
      <div>Created: {{ todo.creationDate.toLocaleDateString() }}</div>
      <div>Due date: {{ todo.dueDate.toLocaleDateString() }}</div>
      <button type="button" class="btn btn-primary float-end m-2" @click="$emit('onTaskDone', todo.id, index)">Done
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">


import type Todo from "@/objects/Todo";

defineProps({
  todos: {
    type: Array<Todo>, // Specify the type as Array
    required: true // Make it required if necessary
  }
})

</script>

<style scoped>
.content {
  padding-left: 8px;
}
</style>
