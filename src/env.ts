/**
 * 환경설정에 관한 객체.
 */
export default {
  /**
   * 개발용 모드인지 확인하여 그 결과를 반환합니다.
   */
  isDevMode: import.meta.env.MODE === "development",

  /**
   * 현재 세션이 localhost인지 확인하여 그 결과를 반환합니다.
   */
  isLocalhost:
    import.meta.env.BASE_URL === "127.0.0.1" ||
    import.meta.env.BASE_URL === "localhost",
};
