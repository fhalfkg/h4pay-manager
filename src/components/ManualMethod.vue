<script setup lang="ts">
import { Ref, ref } from 'vue'

defineProps<{ modelValue: Recipient[] | null }>()
const emit = defineEmits<{ 'update:modelValue': [value: Recipient[] | null] }>()

type Recipient = {
  phoneNumber: string,
  name: string,
  products: object[]
}

const recipients: Ref<Recipient[]> = ref([
  {
    phoneNumber: 'aaa',
    name: 'aaa',
    products: [
      {
        id: 1
      }
    ]
  }
])

function pushRecipient() {
  recipients.value.push({
    phoneNumber: 'bbb',
    name: 'bbb',
    products: [
      {
        id: 1
      }
    ]
  })
  emit('update:modelValue', recipients.value)
}

function popRecipient() {
  recipients.value.pop()
  emit('update:modelValue', recipients.value)
}

function pushProduct(index: number) {
  recipients.value[index].products.push({
    id: null
  })
  emit('update:modelValue', recipients.value)
}

function popProduct(index: number) {
  recipients.value[index].products.pop()
  emit('update:modelValue', recipients.value)
}

function createRequest() {

}
</script>

<template>
  <div class="recipient-container">
    <div class="recipient" v-for="(recipient, index) in recipients">
      <label class="label">전화번호</label>
      <div class="input">
        <input v-model="recipient.phoneNumber" @change="$emit('update:modelValue', recipients)" />
      </div>
      <label class="label">이름</label>
      <div class="input">
        <input v-model="recipient.name" @change="$emit('update:modelValue', recipients)" />
      </div>
      <label class="label">상품</label>
      <div class="product" v-for="product in recipient.products">
        <select class="dropdown" @change="$emit('update:modelValue', recipients)">
          <option value="">선택1</option>
          <option value="">선택2</option>
          <option value="">선택3</option>
          <option value="">선택4</option>
        </select>
        <div style="width: 100px;" class="input">
          <input style="text-align: center" value="1" @change="$emit('update:modelValue', recipients)" />
        </div>
      </div>
      <div class="modifying-product-button-container">
        <div class="add-button" @click="pushProduct(index)">
          <span style="color: white; font-size: 30px; line-height: 1" class="material-symbols-outlined">add</span>
        </div>
        <div v-if="recipient.products.length >> 1">
          <div style="margin-left: 10px" class="remove-button" @click="popProduct(index)">
            <span style="color: white; font-size: 30px; line-height: 1" class="material-symbols-outlined">remove</span>
          </div>
        </div>
      </div>
    </div>
    <div class="modifying-recipient-button-container">
      <div class="create-request-button" @click="createRequest">
        <span style="color: white; font-size: 24px; line-height: 1" class="material-symbols-outlined">forward_to_inbox</span>
      </div>
      <div style="height: 10px"></div>
      <div class="add-button" @click="pushRecipient">
        <span style="color: white; font-size: 30px; line-height: 1" class="material-symbols-outlined">add</span>
      </div>
      <div v-if="recipients.length >> 1">
        <div style="height: 10px"></div>
        <div class="remove-button" @click="popRecipient">
          <span style="color: white; font-size: 30px; line-height: 1" class="material-symbols-outlined">remove</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
}

.dropdown {
  appearance: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  line-height: 20px;
  border: none;
  outline: none;
  background-color: white;
  box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 10px 0;
  margin-right: 10px;
  padding: 0 18px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 18px;
  z-index: 1;
}

.dropdown:hover {
  box-shadow: inset 0 0 0 2px #83bdff;
}

.dropdown:focus-within {
  box-shadow: inset 0 0 0 2px slateblue;
}

.dropdown:first-child {
  margin-top: 0;
}

.dropdown:last-child {
  margin-bottom: 0;
}

.modifying-recipient-button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
}

.modifying-product-button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.create-request-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: slateblue;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  cursor: pointer;
}

.add-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: rgb(8, 191, 17);
  border-radius: 50%;
  transition: background-color 0.2s ease;
  cursor: pointer;
}

.remove-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: rgb(224, 54, 54);
  border-radius: 50%;
  transition: background-color 0.2s ease;
  cursor: pointer;
}

.create-request-button:hover {
  background-color: rgb(79, 67, 153);
}

.add-button:hover {
  background-color: rgb(8, 151, 17);
}

.remove-button:hover {
  background-color: rgb(190, 54, 54);
}

.recipient-container {
  display: flex;
  overflow-x: scroll;
}

.recipient {
  display: flex;
  flex-direction: column;
  flex: 0 0 360px;
  margin: 10px;
  padding: 24px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 3px 10px rgba(217, 217, 217, 0.8);
}

.label {
  display: inline-block;
  margin: 0.5rem 0;
}

.label:first-child {
  margin-top: 0;
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
