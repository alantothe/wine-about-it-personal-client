import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://wine-about-it-personal-server.onrender.com/api",
  development: "https://wine-about-it-personal-server.onrender.com/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

// intercepts the request and adds the token to the header
// this  will do it for every request
// but I can do specific request if I want to do by adding the header to the request
api.interceptors.request.use(
  async function (config) {
    config.headers["Authorization"] = await getToken();
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
