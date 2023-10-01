import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export const useStore = defineStore('store', () => {
  const accessToken: Ref<string | null> = ref(null)
  
  function setAccessToken(token: string) {
    accessToken.value = token
  }

  function clearAccessToken() {
    accessToken.value = null
  }

  return { accessToken, setAccessToken, clearAccessToken }
}, { persist: true })
