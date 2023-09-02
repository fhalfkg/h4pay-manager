<script setup lang="ts">
import { Ref, ref } from 'vue';

defineProps<{ modelValue: File | undefined }>()
const emit = defineEmits<{ 'update:modelValue': [value: File | undefined] }>()

const isUploaded: Ref<boolean> = ref(false)
const uploadBoxBackgroundColor: Ref<string> = ref('#f5f5f5')
const fileInput: Ref<HTMLInputElement | null> = ref(null)
const uploadedFile: Ref<File | undefined> = ref(undefined)
const fileName: Ref<string | null | undefined> = ref(null)

function uploadFileFromDrop(e: DragEvent) {
  const file = e.dataTransfer?.files[0]

  if (validate(file) == true) {
    uploadBoxBackgroundColor.value = '#f5f5f5'
    isUploaded.value = true
    uploadedFile.value = file
    fileName.value = file?.name
    emit('update:modelValue', uploadedFile.value)
  } else {
    uploadBoxBackgroundColor.value = '#f5f5f5'
    alert('.xls, .xlsx 파일만 업로드할 수 있습니다.')
  }
}

function uploadFileFromClick(e: Event) {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]

  if (validate(target.files?.[0]) == true) {
    isUploaded.value = true
    uploadedFile.value = file
    fileName.value = file?.name
    emit('update:modelValue', uploadedFile.value)
  } else {
    alert('.xls, .xlsx 파일만 업로드할 수 있습니다.')
  }
}

function onFileChange() {
  fileInput.value?.click()
}

function validate(file: File | undefined) {
  const regex = /(\.xls|\.xlsx)$/gi
  return regex.test(file?.name as string)
}
</script>

<template>
  <div ref="uploadBox" class="upload-box" @click="onFileChange" @dragover.prevent="uploadBoxBackgroundColor = '#e3e3e3'"
    @dragleave="uploadBoxBackgroundColor = '#f5f5f5'" @drop.prevent="uploadFileFromDrop">
    <span style="font-size: 50px; line-height: 1; color: grey" class="material-symbols-outlined">download</span>
    <span style="color: grey" v-if="!isUploaded">드래그 & 드롭 또는 클릭</span>
    <span style="color: grey" v-if="isUploaded">{{ fileName }}</span>
    <input ref="fileInput" type="file" style="display: none" @change="uploadFileFromClick" />
  </div>
</template>

<style scoped>
.upload-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin: 10px 0px;
  background-color: v-bind(uploadBoxBackgroundColor);
  border: lightgrey solid 3px;
  border-radius: 24px;
  cursor: pointer;
}
</style>
