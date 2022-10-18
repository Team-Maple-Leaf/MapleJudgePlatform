/**
 * 사용자 정보
 * https://developers.google.com/identity/gsi/web/reference/html-reference#server-side
 */
export class UserInfo {
  /**
   * The JWT's issuer
   */
  iss?: string;

  /**
   * Client ID
   */
  aud?: string;

  /**
   * 구글 계정 unique ID
   */
  sub?: string;

  /**
   * 사용자 이메일 주소
   */
  email?: string;

  /**
   * true, if Google has verified the email address
   */
  email_verified?: boolean;

  /**
   * 사용자 전체 이름
   */
  name?: string;

  /**
   * 사용자 프로필 사진 주소
   */
  picture?: string;

  /**
   * 사용자 이름
   */
  given_name?: string;

  /**
   * 사용자 성
   */
  family_name?: string;

  /**
   * Unix timestamp of the assertion's creation time
   */
  iat?: number;

  /**
   * Unix timestamp of the assertion's expiration time
   */
  exp?: number;

  nbf?: number;
  hd?: string;
  azp?: string;
  jti?: string;

  constructor(data: any) {
    if (data === undefined) return;

    if (data.iss !== undefined) this.iss = data.iss;
    if (data.nbf !== undefined) this.nbf = data.nbf;
    if (data.aud !== undefined) this.aud = data.aud;
    if (data.sub !== undefined) this.sub = data.sub;
    if (data.hd !== undefined) this.hd = data.hd;
    if (data.email !== undefined) this.email = data.email;
    if (data.email_verified !== undefined)
      this.email_verified = data.email_verified;
    if (data.azp !== undefined) this.azp = data.azp;
    if (data.name !== undefined) this.name = data.name;
    if (data.picture !== undefined) this.picture = data.picture;
    if (data.given_name !== undefined) this.given_name = data.given_name;
    if (data.family_name !== undefined) this.family_name = data.family_name;
    if (data.iat !== undefined) this.iat = data.iat;
    if (data.exp !== undefined) this.exp = data.exp;
    if (data.jti !== undefined) this.jti = data.jti;
  }

  /**
   * 이 객체가 현재 빈 값인지 확인합니다.
   * @returns 객체가 리셋된 경우 true, 외 false
   */
  isEmpty(): boolean {
    return this.sub === undefined || this.sub === "";
  }

  /**
   * 빈 사용자 정보 객체를 생성하여 빈환합니다.
   * @returns empty UserInfo.
   */
  static default(): UserInfo {
    return new UserInfo({});
  }
}
