import { Buffer } from "buffer";

/**
 * Checksum을 만들어 반환합니다.
 * @param data input data.
 * @returns checksum.
 */
const getChecksum = (data: string | undefined) => {
  if (data === undefined) return 0;

  return Buffer.from(data, "utf8").reduce((prev, next) => prev ^ next, 0);
};

/**
 * Checksum을 Base64로 변환합ㄴ디ㅏ.
 * @param checksum checksum.
 * @returns base64.
 */
const checksumToBase64 = (checksum: number) => {
  return Buffer.from(checksum.toString()).toString("base64");
};

export { getChecksum, checksumToBase64 };
