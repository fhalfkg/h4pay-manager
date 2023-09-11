<script setup lang="ts">
import { ref } from 'vue'

const notices = ref([
  {
    no: 0,
    title: "테스트",
    updatedDate: "1970-01-01 00:00:00",
    showDetails: false
  },
  {
    no: 1,
    title: "테스트",
    updatedDate: "1970-01-01 00:00:00",
    showDetails: false
  },
  {
    no: 2,
    title: "테스트",
    updatedDate: "1970-01-01 00:00:00",
    showDetails: false
  },
  {
    no: 3,
    title: "테스트",
    updatedDate: "1970-01-01 00:00:00",
    showDetails: false
  },
  {
    no: 4,
    title: "테스트",
    updatedDate: "1970-01-01 00:00:00",
    showDetails: false
  },
  {
    no: 5,
    title: "테스트",
    updatedDate: "1970-01-01 00:00:00",
    showDetails: false
  }
])

function showDetails(index: number) {
  notices.value[index].showDetails = !notices.value[index].showDetails
}
</script>

<template>
  <div class="container">
    <main class="main">
      <h1 class="typography">공지사항</h1>
      <p class="typography">공지사항을 관리할 수 있습니다.</p>
      <div style="height: 32px"></div>
      <div class="table-container">
        <div class="scroll-container">
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
                <td><span class="material-symbols-outlined expand" :class="{ expanded: notice.showDetails }"
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
      </div>
    </main>
  </div>
</template>

<style scoped>
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
