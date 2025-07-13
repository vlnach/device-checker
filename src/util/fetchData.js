import { API_BASE_URL } from "../constants.js";

export async function fetchGuidesByQuery(query) {
  const response = await fetch(`${API_BASE_URL}/search/${query}`);
  if (!response.ok) throw new Error("Failed to fetch guides");
  const data = await response.json();
  return data.items || []; // depends on API structure
}
