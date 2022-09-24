import { APISettings } from "../config";

/**
 * API Wrapper.
 */
export default {
  /**
   * GET 방식으로 EP에 질의합니다.
   * @param ep EndPoint.
   * @returns Response Body data with json.
   */
  async get(ep: String) {
    const response = await fetch(APISettings.baseURL + ep, {
      method: "GET",
      headers: APISettings.headers,
    });

    if (response.status != 200) {
      throw response.status;
    } else {
      return response.json();
    }
  },

  /**
   * POST 방식으로 EP에 질의합니다.
   * @param ep EndPoint.
   * @param data POST Body.
   * @returns Response Body data with json.
   */
  async post(ep: String, data: any) {
    APISettings.headers.set("Content-Type", "application/json");
    APISettings.headers.set("Authorization", "Bearer " + APISettings.token);

    const response = await fetch(APISettings.baseURL + ep, {
      method: "POST",
      headers: APISettings.headers,
      body: data,
    });

    if (response.status != 201) {
      throw response.status;
    } else {
      return response.json();
    }
  },
};
