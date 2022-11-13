import { checksumToBase64, getChecksum } from "@/utils/crypto";
import type { UserInfo } from "./UserInfo";

/**
 * Sign In Request Payload.
 */
export class SignInRequest {
  maple: string | undefined;
  name: string | undefined;
  picture: string | undefined;
  email: string | undefined;
  leaf: string | undefined;

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
