class PhoneNumberConverter {
  /**
   * 전화번호에 대시를 추가합니다.
   * 전화번호에 숫자 이외의 다른 문자가 존재할 경우
   * 삭제한 뒤 대시를 추가한 결과를 반환합니다.
   * @param {string} phoneNumber 대시가 없는 전화번호
   * @returns {string} 대시가 추가된 전화번호 
   */
  static addDashes(phoneNumber: string): string {
    return phoneNumber
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
  }

  /**
   * 전화번호에서 숫자 이외의 문자를 삭제합니다.
   * @param {string} phoneNumber 대시가 있는 전화번호
   * @returns {string} 대시를 없앤 전화번호 
   */
  static removeNonNumerics(phoneNumber: string): string {
    return phoneNumber.replace(/[^0-9]/g, '')
  }
}

export default PhoneNumberConverter
