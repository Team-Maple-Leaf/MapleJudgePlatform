import { UserInfo } from "./UserInfo";
import { SignInRequest } from "./SignInRequest";

/**
 * 캐싱으로 갖는 User의 세부 정보.
 */
export class userDetail {
  maple: string | undefined;
  name: string | undefined;
  picture: string | undefined;
  email: string | undefined;
  jwt: string | undefined;

  constructor(signInRequest: SignInRequest, jwt: string) {
    this.maple = signInRequest.maple;
    this.name = signInRequest.name;
    this.picture = signInRequest.picture;
    this.email = signInRequest.email;
    this.jwt = jwt;
  }

  /**
   * 이 객체가 유효한지 확인합니다.
   * @returns Is valid.
   */
  isValid(): boolean {
    return this.jwt !== null && this.jwt !== undefined && this.jwt !== "";
  }

  /**
   * JWT Auth 값을 반환합니다.
   * @returns auth.
   */
  getAuth(): string {
    return "Bearer " + (this.jwt ?? "");
  }

  /**
   * 값을 업데이트 합니다.
   * @param props 업데이트 대상 props.
   */
  update(props: userDetail): void {
    this.maple = props.maple;
    this.name = props.name;
    this.picture = props.picture;
    this.email = props.email;
    this.jwt = props.jwt;
  }

  /**
   * 빈 Instance 입니다.
   * @returns Default Instance.
   */
  static Empty(): userDetail {
    return new userDetail(new SignInRequest(UserInfo.default()), "");
  }
}
