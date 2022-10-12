/**
 * 사용자 정보
 * https://developers.google.com/identity/gsi/web/reference/html-reference#server-side
 */
export class UserInfo {
  iss?: string;
  nbf?: number;
  aud?: string;
  sub?: string;
  hd?: string;
  email?: string;
  email_verified?: boolean;
  azp?: string;
  name?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
  iat?: number;
  exp?: number;
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

  isEmpty(): boolean {
    return this.email === undefined || this.email === "";
  }

  static default(): UserInfo {
    return new UserInfo({});
  }
}
