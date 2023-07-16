<script setup lang="ts">
import { ref } from 'vue'

import ordersJson from '@/assets/order.json'

const orders = ref(ordersJson)
const date = ref()
</script>

<template>
  <div class="container">
    <section class="order">
      <h1 class="typography">주문 내역 조회</h1>
      <p class="typography">날짜 범위, 전화번호를 조건으로 설정하여 조회할 수 있습니다.</p>
      <div style="flex: 0 0 auto; height: 32px"></div>
      <div class="condition-container">
        <div class="condition">
          <p class="typography label">날짜 범위</p>
          <VueDatePicker v-model="date" range auto-apply locale="ko" format="yyyy/MM/dd" :partial-range="false"
            :enable-time-picker="false"></VueDatePicker>
        </div>
        <div class="condition">
          <p class="typography label">전화번호</p>
          <div class="input">
            <input />
          </div>
        </div>
      </div>
      <div style="margin-top: 10px; margin-bottom: 30px">
        <button class="primary-button">조회</button>
      </div>
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th style="width: 50px"></th>
              <th>주문번호</th>
              <th>전화번호</th>
              <th>금액</th>
              <th>주문 일시</th>
              <th>만료 일시</th>
              <th>교환 여부</th>
            </tr>
          </thead>
          <tbody v-for="(order, index) in orders">
            <tr class="expandable">
              <td><span class="material-symbols-outlined expand">chevron_right</span></td>
              <td>{{ order.id }}</td>
              <td>{{ order.phoneNumber }}</td>
              <td>{{ order.amount }}</td>
              <td>{{ order.orderedDate }}</td>
              <td>{{ order.expiration }}</td>
              <td>{{ order.isExchanged ? "O" : "X" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  background: white;
  padding-left: 260px;
  width: 100%;
  height: 100vh;
  margin: auto;
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

.order {
  padding: 40px 0;
  width: calc(100% - 96px);
  height: 100%;
  margin: 0 auto;
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
