import api from "./apiConfig";

export const fetchResults = async (query) => {
  if (query.length > 0) {
    const response = await api.get("wines/search/", { params: { query } });
    return response.data;
  } else {
    return [];
  }
};
