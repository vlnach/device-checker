import { API_BASE_URL } from "../constants.js";

export async function fetchGuidesByQuery(query) {
  const url = `${API_BASE_URL}search/${encodeURIComponent(query)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch guides");
  }

  const data = await response.json();
  console.log("Fetched data:", data);

  return data.results.slice(0, 5);
}
