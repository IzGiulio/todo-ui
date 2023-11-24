<script setup lang="ts">

import {ref} from "vue";

const emit = defineEmits(['closeModal'])

const title = ref('')
const invalidTitle = ref(false)
const description = ref('')

function onCancelClicked() {
  title.value = ''
  description.value = ''
  invalidTitle.value = false
  emit('closeModal')
}

function onSaveClicked() {
  if (title.value === '') {
    invalidTitle.value = true
  } else {
    invalidTitle.value = false
    emit('closeModal', title.value, description.value, new Date())
  }
}

</script>

<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          Add TODO
        </div>

        <div class="modal-body">
          <input class="form-control form-control-lg" :class="{'invalid': invalidTitle}" type="text" placeholder="Title" v-model="title">
          <input class="form-control" type="text" placeholder="Description" v-model="description">
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="onCancelClicked">
            Cancel
          </button>
          <button type="button" class="btn btn-primary m-2" @click="onSaveClicked">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 25%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.invalid {
  border-color: red;
}

</style>