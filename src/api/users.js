import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export async function registerUser(credentials) {
  try {
    const response = await api.post("/users/register", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data.token);
    console.log(user);
    console.log(response.data.token);

    return user;
  } catch (error) {
    console.log("Error: Registering user.", error);
  }
}

export async function loginUser(credentials) {
  try {
    const response = await api.post("/users/login", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data.token);
    return user;
  } catch (error) {
    console.log("Error: Logging in user.", error);
  }
}
export async function getUser(id) {
  try {
    const response = await api.get(`/users/id/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error: Getting user.", error);
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("users/verify");
    return res.data;
  }
  return false;
};

export const updateFavorites = async (userId, wineId) => {
  try {
    const resp = await api.patch(`/users/${userId}/favorites`, {
      favorites: wineId,
    });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteFavorites = async (userId, wineId) => {
  try {
    const resp = await api.patch(`/users/delete/${userId}/favorites`, {
      favorites: wineId,
    });
    return resp.data;
  } catch (error) {
    throw error;
  }
};
