import { checksumToBase64, getChecksum } from "@/utils/crypto";
import type { UserInfo } from "./UserInfo";

/**
 * Sign In Request Payload.
 */
export class SignInRequest {
  public maple: string | undefined;
  public name: string | undefined;
  public picture: string | undefined;
  public email: string | undefined;
  public leaf: string | undefined;

  constructor(userInfo: UserInfo) {
    this.maple = userInfo.sub;
    this.name = userInfo.name;
    this.picture = userInfo.picture;
    this.email = userInfo.email;

    // checksum
    const concatData = (this.maple ?? "")
      .concat(this.name ?? "")
      .concat(this.picture ?? "");
    this.leaf = checksumToBase64(getChecksum(concatData));
  }
}
