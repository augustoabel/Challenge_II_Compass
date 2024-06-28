import axios from "axios";

const API_URL = "/api/3";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTM0MDQ4MS4zNDYzNjIsInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.172i_FabRWM8kC2bgZXS_XB0gM9IV0lmOpVFTtHazGA";

export const getToken = async () => {
  try {
    const response = await axios.get(`${API_URL}/authentication/token/new`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });
    const requestToken = response.data.request_token;
    login(requestToken);
    sessionStorage.setItem("token", requestToken);
  } catch (error) {
    console.error("Erro ao obter token:", error);
    return null;
  }
};

export const login = async (token: string): Promise<void> => {
  try {
    const response = await axios.get(`${API_URL}${token}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Login bem-sucedido:", response);
    window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:5173/home`;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
};

export const loginGuest = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/authentication/guest_session/new",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      window.location.href = "http://localhost:5173/home";
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const createSession = async () => {
  console.log("Creating session");
  let token = sessionStorage.getItem("token");
  const options = {
    method: "POST",
    url: "https://api.themoviedb.org/3/authentication/session/new",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        `Bearer ${AUTH_TOKEN}`},
    data: { request_token: token },
  };

  axios
    .request(options)
    .then(response => {
      console.log(response.data);
      sessionStorage.setItem("session_id", response.data.session_id);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const deleteToken = async () => {
  let session_id = sessionStorage.getItem("session_id");
  console.log("session_id: ", session_id);

  const options = {
    method: "DELETE",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzZGE3MWVhYjc2NDZjNjQxNzRhNWEyMmM2NDc4NCIsIm5iZiI6MTcxOTU4Mzc4Ni4zNjgwMjYsInN1YiI6IjY2N2IwYjdhZjMzNThhNDc0MWQ5YzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uDtvDwOJhrcnkSs1Ed3KsL7FX8hm6z1YYzZR3xzW4hc",
    },
    body: JSON.stringify({ session_id: session_id}),
  };

  fetch("https://api.themoviedb.org/3/authentication/session", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};


