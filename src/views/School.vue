<script setup lang="ts">
import { ref, Ref } from 'vue'

import { getData } from '@/api';
import Modal from '@/components/Modal.vue'
import PhoneNumberConverter from '@/util/PhoneNumberConverter'

const schools: Ref<School[]> = ref([])
const isModifyModalOpened: Ref<boolean> = ref(false)
const isAddModalOpened: Ref<boolean> = ref(false)
const selectedList: Ref<number[]> = ref([])
const modifiedSchool: Ref<School | object> = ref({})
const addedSchool: Ref<School> = ref(<School>{
  neisCode: '',
  name: '',
  sellerInfo: {
    businessRegistrationNumber: '',
    mailOrderSalesReportNumber: '',
    name: '',
    address: '',
    phoneNumber: '',
    representativeName: ''
  }
})

getData<Page<School>>('/school').then(res => {
  schools.value = res.data.content

  schools.value.forEach((value, index) => {
    schools.value[index].sellerInfo.phoneNumber = PhoneNumberConverter.addDashes(value.sellerInfo.phoneNumber)
  })
})

function modify() {
  (modifiedSchool.value as School).sellerInfo.phoneNumber = PhoneNumberConverter.removeNonNumerics((modifiedSchool.value as School).sellerInfo.phoneNumber)

  modifiedSchool.value = {}
  isModifyModalOpened.value = false
}

function add() {
  (addedSchool.value as School).sellerInfo.phoneNumber = PhoneNumberConverter.removeNonNumerics((addedSchool.value as School).sellerInfo.phoneNumber)

  addedSchool.value = <School>{
    neisCode: '',
    name: '',
    sellerInfo: {
      businessRegistrationNumber: '',
      mailOrderSalesReportNumber: '',
      name: '',
      address: '',
      phoneNumber: '',
      representativeName: ''
    }
  }
  isAddModalOpened.value = false
}
</script>

<template>
  <div class="container">
    <main class="main">
      <h1 class="typography">학교</h1>
      <p class="typography">학교를 관리할 수 있습니다.</p>
      <div style="height: 32px"></div>
      <div class="table-container">
        <div class="scroll-container">
          <table class="table">
            <thead>
              <tr>
                <th style="width: 50px"></th>
                <th>나이스 코드</th>
                <th>학교명</th>
                <th>주소</th>
                <th>대표명</th>
                <th>전화번호</th>
                <th>사업자등록번호</th>
                <th>통신판매번호</th>
              </tr>
            </thead>
            <tbody v-for="(school, index) in schools">
              <td class="checkbox-cell"><input type="checkbox" v-model="selectedList" :value="index"
                  :disabled="selectedList.length > 0 && selectedList.indexOf(index) === -1"></td>
              <td>{{ school.neisCode }}</td>
              <td>{{ school.name }}</td>
              <td>{{ school.sellerInfo.address }}</td>
              <td>{{ school.sellerInfo.representativeName }}</td>
              <td>{{ school.sellerInfo.phoneNumber }}</td>
              <td>{{ school.sellerInfo.businessRegistrationNumber }}</td>
              <td>{{ school.sellerInfo.mailOrderSalesReportNumber }}</td>
            </tbody>
          </table>
          <div class="button-container">
            <button class="primary-button" v-if="selectedList.length > 0" @click="() => {
              modifiedSchool = JSON.parse(JSON.stringify(schools[selectedList[0]]))
              isModifyModalOpened = true
            }">편집</button>
            <button class="primary-button" style="margin-left: 10px" @click="isAddModalOpened = true">추가</button>
          </div>
        </div>
      </div>
    </main>
    <Modal v-if="isModifyModalOpened" @close-modal="isModifyModalOpened = false">
      <div class="modal-container">
        <h1 class="typography-h5">편집</h1>
        <div class="modal-content">
          <label class="input-label">학교명</label>
          <div class="input">
            <input v-model="(modifiedSchool as School).name" />
          </div>
          <label class="input-label">주소</label>
          <div class="input">
            <input v-model="(modifiedSchool as School).sellerInfo.address" />
          </div>
          <label class="input-label">대표명</label>
          <div class="input">
            <input v-model="(modifiedSchool as School).sellerInfo.representativeName" />
          </div>
          <label class="input-label">전화번호</label>
          <div class="input">
            <input v-model="(modifiedSchool as School).sellerInfo.phoneNumber"
              @input="() => { (modifiedSchool as School).sellerInfo.phoneNumber = PhoneNumberConverter.addDashes((modifiedSchool as School).sellerInfo.phoneNumber) }" />
          </div>
          <label class="input-label">사업자등록번호</label>
          <div class="input">
            <input v-model="(modifiedSchool as School).sellerInfo.businessRegistrationNumber" />
          </div>
          <label class="input-label">통신판매번호</label>
          <div class="input">
            <input v-model="(modifiedSchool as School).sellerInfo.mailOrderSalesReportNumber" />
          </div>
          <button class="primary-button-big" style="margin: 1rem 0;" @click="modify">적용</button>
        </div>
      </div>
    </Modal>
    <Modal v-if="isAddModalOpened" @close-modal="isAddModalOpened = false">
      <div class="modal-container">
        <h1 class="typography-h5">추가</h1>
        <div class="modal-content">
          <label class="input-label">나이스 코드</label>
          <div class="input">
            <input v-model="(addedSchool as School).neisCode" />
          </div>
          <label class="input-label">학교명</label>
          <div class="input">
            <input v-model="(addedSchool as School).name" />
          </div>
          <label class="input-label">주소</label>
          <div class="input">
            <input v-model="(addedSchool as School).sellerInfo.address" />
          </div>
          <label class="input-label">대표명</label>
          <div class="input">
            <input v-model="(addedSchool as School).sellerInfo.representativeName" />
          </div>
          <label class="input-label">전화번호</label>
          <div class="input">
            <input v-model="(addedSchool as School).sellerInfo.phoneNumber"
              @input="() => { (addedSchool as School).sellerInfo.phoneNumber = PhoneNumberConverter.addDashes((addedSchool as School).sellerInfo.phoneNumber) }" />
          </div>
          <label class="input-label">사업자등록번호</label>
          <div class="input">
            <input v-model="(addedSchool as School).sellerInfo.businessRegistrationNumber" />
          </div>
          <label class="input-label">통신판매번호</label>
          <div class="input">
            <input v-model="(addedSchool as School).sellerInfo.mailOrderSalesReportNumber" />
          </div>
          <button class="primary-button-big" style="margin: 1rem 0;" @click="add">적용</button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<style scoped>
.checkbox-cell {
  width: 50px;
  height: 46px;
}

.modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-content {
  width: 80%;
}

.input-label {
  font-weight: semibold;
  display: inline-block;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
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
