import axios, { Axios, AxiosRequestConfig } from 'axios'

const client: Axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getData = async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  try {
    const response = await client.get<ApiResponse<T>>(url, config)
    return response.data
  } catch (e: any) {
    throw new Error(e.toString())
  }
}

export const postData = async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  const response = await client.post<ApiResponse<T>>(url, data, config);
  return response.data;
}
