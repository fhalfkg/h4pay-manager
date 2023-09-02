<script setup lang="ts">
import { ref } from 'vue'

const products = ref([
  {
    no: 0,
    name: '테스트 상품',
    price: 2500,
    description: '풀무원',
    isSoldOut: false,
    showDetails: false
  }
])

function showDetails(index: number) {
  products.value[index].showDetails = !products.value[index].showDetails
}
</script>

<template>
  <div class="container">
    <main class="main">
      <h1 class="typography">상품</h1>
      <p class="typography">상품을 관리할 수 있습니다.</p>
      <div style="flex: 0 0 auto; height: 32px"></div>
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th style="width: 50px"></th>
              <th class="checkbox-cell"></th>
              <th>상품 번호</th>
              <th>상품명</th>
              <th>가격</th>
              <th>설명</th>
              <th>품절 여부</th>
            </tr>
          </thead>
          <tbody v-for="(product, index) in products">
            <tr class="expandable">
              <td><span class="material-symbols-outlined expand" :class="{ expanded: products[index].showDetails }"
                  @click="showDetails(index)">chevron_right</span></td>
              <td class="checkbox-cell"><input type="checkbox"></td>
              <td>{{ product.no }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.isSoldOut ? "O" : "X" }}</td>
            </tr>
            <tr v-if="product.showDetails">
              <td class="detail" colspan="7">detail</td>
            </tr>
          </tbody>
        </table>
        <div class="button-container">
          <button class="primary-button">편집</button>
          <button class="primary-button" style="margin-left: 10px">추가</button>
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

.checkbox-cell {
  width: 30px;
}

.expand {
  cursor: pointer;
  transition: transform .15s ease-out;
}

.expanded {
  transform: rotate(90deg);
}
</style>
