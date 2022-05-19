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
