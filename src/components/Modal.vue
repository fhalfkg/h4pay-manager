<template>
  <div class="shadow">
    <div class="modal">
      <div class="header">
        <button
          class="close-button"
          type="button"
          @click="$emit('close-modal')"
        ></button>
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  left: 0;
  right: 0;
  top: 50%;
  z-index: 999;
  transform: translateY(-50%);
  margin: 0 auto;
  background: white;
  border-radius: 8px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
}

.body {
  overflow: scroll;
  overflow-x: hidden;
  flex: 1 1 auto;
  padding: 1rem;
}

.shadow {
  display: block;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.35);
}

.close-button {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  color: black;
  border: 0;
  opacity: 0.5;
  margin: -0.5rem -0.5rem -0.5rem auto;
  padding: 0.5rem 0.5rem;
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/1em auto no-repeat;
}

.close-button:hover {
  opacity: 0.75;
  cursor: pointer;
}
</style>
