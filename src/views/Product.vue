<script setup lang="ts">
import { Ref, ref } from 'vue'

import { getData, postData } from '@/api'

const schoolNeisCode = 'M100002171'
let products: Ref<Product[] | null> = ref(null)
let showDetailsList: Ref<boolean[]> = ref([])

getData<Product[]>(`/product/list/${schoolNeisCode}`).then(res => {
  products.value = res.data
  showDetailsList.value.fill(false)
  console.log(`Retrieved ${products.value.length} datas`)
})

function showDetails(index: number) {
  showDetailsList.value[index] = !showDetailsList.value[index]
}
</script>

<template>
  <div class="container">
    <main class="main">
      <h1 class="typography">상품</h1>
      <p class="typography">상품을 관리할 수 있습니다.</p>
      <div style="height: 32px"></div>
      <div class="table-container">
        <div class="scroll-container">
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
                <td><span class="material-symbols-outlined expand" :class="{ expanded: showDetailsList[index] }"
                    @click="showDetails(index)">chevron_right</span></td>
                <td class="checkbox-cell"><input type="checkbox"></td>
                <td>{{ product.no }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.isSoldOut ? "O" : "X" }}</td>
              </tr>
              <tr v-if="showDetailsList[index]">
                <td class="detail" colspan="7">detail</td>
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
