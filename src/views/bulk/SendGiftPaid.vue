<script setup lang="ts">
</script>

<template>
  <div class="container">
    <section class="section">
      <h1 class="typography">대량 전송 (결제)</h1>
      <p class="typography">대금이 결제되는 선물 대량 전송 요청을 생성합니다.</p>
      <div style="flex: 0 0 auto; height: 32px"></div>
      <div class="condition-container">
        <div class="condition">
          <button class="primary-button-big"><span style="color: white; margin-right: 5px"
              class="material-symbols-outlined">data_table</span><span>스프레드시트로 입력</span></button>
        </div>
        <div class="condition">
          <button class="primary-button-big"><span style="color: white; margin-right: 5px"
              class="material-symbols-outlined">mouse</span><span>직접 입력</span></button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.condition-container {
  display: flex;
}

.condition {
  width: 100%;
  margin-right: 20px;
}

.condition:last-child {
  margin-right: 0px;
}

.label {
  margin-bottom: 5px;
}

.input {
  display: flex;
  height: 48px;
  line-height: 20px;
  border: none;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
  transition: all 0.2s ease;
  border-radius: 8px;
}

.input:hover {
  box-shadow: inset 0 0 0 2px #83bdff;
}

.input:focus-within {
  box-shadow: inset 0 0 0 2px slateblue;
}

.input input {
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 0 18px;
  font-size: 18px;
}
</style>
