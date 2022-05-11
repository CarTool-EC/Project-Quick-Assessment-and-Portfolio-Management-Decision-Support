import "regenerator-runtime/runtime";

export const request = async (url, options) => {
  let res;
  if (options) res = await fetch(url, options);
  else res = await fetch(url);

  return res;
};

export const authenticationApi = () => {
  return request("/api/login/authentication", { method: "POST" });
};

export const loginApi = (username, password) => {
  return request("/api/login/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
};

export const logoutApi = () => {
  return request("/api/login/logout");
};

