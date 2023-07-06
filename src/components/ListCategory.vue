<template>
	<div class="menu-category">
		<slot name="name"></slot>
	</div>
	<slot name="item"></slot>
</template>

<style scoped>
.menu-category {
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
	color: #4e5968;
	font-size: 13px;
  outline: none;
  border: none;
  margin: 0;
  overflow: visible;
  padding: 12px 16px;
  border-radius: 8px;
}
</style>
