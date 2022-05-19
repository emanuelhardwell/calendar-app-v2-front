const url = process.env.REACT_APP_API_URL;

export const fetchWithOutToken = (endpoint, data, method = "GET") => {
  const urlApi = `${url}/${endpoint}`;

  if (method === "GET") {
    return fetch(urlApi);
  } else {
    return fetch(urlApi, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchWithToken = (endpoint, data, method = "GET") => {
  const urlApi = `${url}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(urlApi, {
      method,
      headers: {
        "x-token": token,
      },
    });
  } else {
    return fetch(urlApi, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};
