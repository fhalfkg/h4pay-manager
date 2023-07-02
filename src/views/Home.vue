<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

import Modal from '@/components/Modal.vue';

const router = useRouter();
const isModalOpened = ref(false);

function submitForm() {
  router.push('/dashboard');
}
</script>

<template>
  <main class="container">
    <div class="content">
      <div class="header">
        <h1>헤더</h1>
      </div>
      <div class="card">
        <div class="signin-header">
          <h1 class="typography-h5">로그인</h1>
        </div>
        <form @submit.prevent="submitForm">
          <div>
            <label class="input-label">전화번호</label>
            <div class="input">
              <input />
            </div>
          </div>

          <div class="m-25">
            <label class="input-label">비밀번호</label>
            <div class="input">
              <input type="password" />
            </div>
          </div>

          <div class="buttons">
            <button
              class="signin-button"
              type="button"
              @click="isModalOpened = true"
            >
              회원가입
            </button>
            <button class="signin-button" type="submit">로그인</button>
          </div>
        </form>
      </div>
      <Modal v-if="isModalOpened" @close-modal="isModalOpened = false">
        <div class="signup">
          <h1 class="typography-h5">회원가입</h1>
          <div class="signup-content">
            <div class="signin-input">
              <label class="input-label">전화번호</label>
              <div class="input">
                <input />
              </div>
              <label class="input-label">전화번호</label>
              <div class="input">
                <input />
              </div>
              <label class="input-label">전화번호</label>
              <div class="input">
                <input />
              </div>
              <label class="input-label">전화번호</label>
              <div class="input">
                <input />
              </div>
              <label class="input-label">전화번호</label>
              <div class="input">
                <input />
              </div>
              <label class="input-label">전화번호</label>
              <div class="input">
                <input />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  </main>
</template>

<style scoped>
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
    format('woff');
  font-weight: 400;
  font-style: normal;
}

.container {
  font-family: 'Pretendard-Regular';
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.content {
  display: flex;
}

.signin-header {
  margin-bottom: 40px;
}

.signup {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.signup-content {
  width: 80%;
}

.m-25 {
  margin-top: 25px;
}

.card {
  width: 500px;
  background: white;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0px 2px 20px #d9d9d9;
  border: 1px solid #d9d9d9;
}

.header {
  width: 500px;
  background: grey;
  border: 1px solid #d9d9d9;
  margin-right: 10px;
}

.typography-h5 {
  font-size: 25px;
}

.input-label {
  font-weight: semibold;
  display: inline-block;
  margin-top: 0.5rem;
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

.buttons {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 24px;
}

.signin-button {
  margin-left: 10px;
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 7px;
  background: slateblue;
  font-size: 15px;
  color: white;
  transition: background 0.2s ease;
}

.signin-button:hover {
  background: #4f4399;
  cursor: pointer;
}
</style>
