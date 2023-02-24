import type { userDetail } from "./../structs/userDetail";

const origin = "https://www.maple-leaf.dev:45000";
const baseUrl = origin + "/v1";
const timeout = 5000;

/**
 * REST - GET
 * @param ep Endpoint.
 * @param user user info.
 * @returns response.
 */
const getAsync = async <TResponse>(
  ep: string,
  user: userDetail | null = null
) => {
  const response = await fetch(baseUrl + ep, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: user?.getAuth() ?? "",
      refreshToken: user?.getRefreshToken() ?? "",
      "Access-Control-Allow-Origin": origin,
    },
  });

  return (await response.json()) as TResponse;
};

/**
 * REST - POST
 * @param ep Endpoint.
 * @param request request.
 * @param user user info.
 * @returns response.
 */
const postAsync = async <TResponse, TRequest>(
  ep: string,
  request: TRequest,
  user: userDetail | null = null
) => {
  const response = await fetch(baseUrl + ep, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: user?.getAuth() ?? "",
      refreshToken: user?.getRefreshToken() ?? "",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": origin,
    },
    body: JSON.stringify(request),
  });

  return (await response.json()) as TResponse;
};

/**
 * REST - DELETE
 * @param ep Endpoint.
 * @param user user info.
 * @returns response.
 */
const deleteAsync = async <TResponse>(
  ep: string,
  user: userDetail | null = null
) => {
  const response = await fetch(baseUrl + ep, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Authorization: user?.getAuth() ?? "",
      refreshToken: user?.getRefreshToken() ?? "",
      "Access-Control-Allow-Origin": origin,
    },
  });

  return (await response.json()) as TResponse;
};

export { origin, baseUrl, timeout, getAsync, postAsync, deleteAsync };
