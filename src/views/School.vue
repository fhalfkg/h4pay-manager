<script setup lang="ts">
import { ref, Ref } from 'vue'

import { getData } from '@/api';
import Modal from '@/components/Modal.vue'
import PhoneNumberConverter from '@/util/PhoneNumberConverter'

const schools: Ref<School[]> = ref([])
const isModalOpened = ref(false)
const selectedList: Ref<number[]> = ref([])

getData<Page<School>>('/school').then(res => {
  schools.value = res.data.content

  schools.value.forEach((value, index) => {
    schools.value[index].sellerInfo.phoneNumber = PhoneNumberConverter.addDashes(value.sellerInfo.phoneNumber)
  })
})
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
            <button class="primary-button" v-if="selectedList.length > 0" @click="isModalOpened = true">편집</button>
            <button class="primary-button" style="margin-left: 10px">추가</button>
          </div>
        </div>
      </div>
    </main>
    <Modal v-if="isModalOpened" @close-modal="isModalOpened = false"></Modal>
  </div>
</template>

<style scoped>
.checkbox-cell {
  width: 50px;
  height: 46px;
}
</style>
