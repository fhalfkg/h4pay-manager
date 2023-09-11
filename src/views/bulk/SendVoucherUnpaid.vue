<script setup lang="ts">
import { Ref, ref } from 'vue'

import SpreadsheetMethod from '@/components/SpreadsheetMethod.vue'

enum Method {
  Nothing,
  Spreadsheet,
  Manual
}

const selectedMethod: Ref<Method> = ref(Method.Nothing)
const file: Ref<File | undefined> = ref(undefined)
</script>

<template>
  <div class="container">
    <main class="main">
      <h1 class="typography">대량 전송 (무결제)</h1>
      <p class="typography">대금이 결제되지 않는 금액권 대량 전송 요청을 생성합니다.</p>
      <div style="height: 32px"></div>
      <div class="condition-container">
        <div class="condition">
          <button class="primary-button-big" @click="selectedMethod = Method.Spreadsheet"><span
              style="color: white; margin-right: 5px" class="material-symbols-outlined">data_table</span><span>스프레드시트로
              입력</span></button>
        </div>
        <div class="condition">
          <button class="primary-button-big" @click="selectedMethod = Method.Manual"><span
              style="color: white; margin-right: 5px" class="material-symbols-outlined">mouse</span><span>직접
              입력</span></button>
        </div>
      </div>
      <div class="method-container"
        :style="{ display: selectedMethod == Method.Nothing ? 'flex' : undefined, justifyContent: selectedMethod == Method.Nothing ? 'center' : undefined }">
        <span v-if="selectedMethod == Method.Nothing">수신자 명단 입력 방법을 선택해주세요!</span>
        <SpreadsheetMethod v-model="file" v-if="selectedMethod == Method.Spreadsheet"></SpreadsheetMethod>
        <div v-if="selectedMethod == Method.Manual">
          직접 입력
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.method-container {
  margin-top: 24px;
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 24px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 3px 10px rgba(217, 217, 217, 0.8);
}

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

.spreadsheet {
  display: flex;
  flex-direction: column;
}
</style>
