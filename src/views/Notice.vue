<script setup lang="ts">
import { ref } from 'vue'

import noticesJson from '@/assets/notice.json'

const notices = ref(noticesJson)

function showDetails(index: number) {
  notices.value[index].showDetails = !notices.value[index].showDetails
}
</script>

<template>
  <div class="container">
    <section class="section">
      <h1 class="typography">공지사항</h1>
      <p class="typography">공지사항을 관리할 수 있습니다.</p>
      <div style="flex: 0 0 auto; height: 32px"></div>
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th style="width: 50px"></th>
              <th class="checkbox-cell"></th>
              <th>번호</th>
              <th>제목</th>
              <th>작성/수정 일시</th>
            </tr>
          </thead>
          <tbody v-for="(notice, index) in notices">
            <tr class="expandable">
              <td><span class="material-symbols-outlined expand" :class="{ expanded: notices[index].showDetails }"
                  @click="showDetails(index)">chevron_right</span></td>
              <td class="checkbox-cell"><input type="checkbox"></td>
              <td>{{ notice.no }}</td>
              <td>{{ notice.title }}</td>
              <td>{{ notice.updatedDate }}</td>
            </tr>
            <tr v-if="notice.showDetails">
              <td class="detail" colspan="5">detail</td>
            </tr>
          </tbody>
        </table>
        <div class="button-container">
          <button class="primary-button">편집</button>
          <button class="primary-button" style="margin-left: 10px">추가</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
}

.table-container {
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 24px;
  background: white;
  border-radius: 24px;
  box-shadow: 0px 3px 10px rgba(217, 217, 217, 0.8);
}

.table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  white-space: nowrap;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
}

.detail {
  overflow: hidden;
  background-color: rgba(242, 244, 246, 0.5);
  text-align: left;
}

.expand {
  cursor: pointer;
  transition: transform .15s ease-out;
}

.expanded {
  transform: rotate(90deg);
}

.checkbox-cell {
  width: 30px;
}

h1 {
  font-size: 2em;
}

th {
  padding: 8px 12px;
  font-weight: normal;
  border-left: none;
  background: rgb(242, 244, 246);
}

td {
  padding: 8px 12px;
  font-weight: normal;
  border-left: none;
}

tr>td {
  text-align: center;
}
</style>
