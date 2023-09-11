<script setup lang="ts">
import { Ref, ref } from 'vue';

import UploadBox from './UploadBox.vue';

defineProps<{ modelValue: File | undefined }>()
defineEmits<{ 'update:modelValue': [value: File | undefined] }>()

const file: Ref<File | undefined> = ref(undefined)
</script>

<template>
  <div class="spreadsheet">
    <p class="typography">1. 아래 버튼을 눌러 양식 파일을 다운로드합니다. (양식을 변경하면 정상적으로 처리되지 않을 수 있습니다.)</p>
    <button class="primary-button" style="width: 111px; margin: 10px 0px">
      <span style="color: white; line-height: 1; margin-right: 5px"
        class="material-symbols-outlined">download</span>다운로드</button>
    <p class="typography">2. 작성한 양식 파일을 업로드합니다.</p>
    <UploadBox v-model="file" @update:modelValue="$emit('update:modelValue', file)"></UploadBox>
    <button class="submit-button" style="width: 114px; margin-top: 10px"><span
        style="color: white; line-height: 1; margin-right: 5px"
        class="material-symbols-outlined">forward_to_inbox</span>요청 생성</button>
  </div>
</template>

<style scoped>
.spreadsheet {
  display: flex;
  flex-direction: column;
}
</style>
