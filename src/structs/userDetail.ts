import { UserInfo } from "./UserInfo";
import { SignInRequest } from "./SignInRequest";

/**
 * 캐싱으로 갖는 User의 세부 정보.
 */
export class userDetail {
  public maple: string | undefined;
  public name: string | undefined;
  public picture: string | undefined;
  public email: string | undefined;
  public jwt: string | undefined;

  setUserDetail(user: userDetail): void {
    this.maple = user.maple;
    this.name = user.name;
    this.picture = user.picture;
    this.email = user.email;
    this.jwt = user.jwt;
  }

  setJwt(jwt: string): void {
    this.jwt = jwt;
  }

  setInRequest(signInRequest: SignInRequest): void {
    this.maple = signInRequest.maple;
    this.name = signInRequest.name;
    this.picture = signInRequest.picture;
    this.email = signInRequest.email;
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
    const emptyUser = new userDetail();
    emptyUser.setJwt("");
    emptyUser.setInRequest(new SignInRequest(UserInfo.default()));
    return emptyUser;
  }
}
