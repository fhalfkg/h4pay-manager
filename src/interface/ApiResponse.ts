interface ApiResponse<T> {
  serviceCode: string,
  message: string,
  data: T
}
