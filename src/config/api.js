export const DUMMY_API_BASE = "https://dummyjson.com";

export const endpoints = {
  dashboard: `${DUMMY_API_BASE}/products`,
  notifications: `${DUMMY_API_BASE}/comments`,
  orders: `${DUMMY_API_BASE}/carts`,
  messages: `${DUMMY_API_BASE}/posts`,
  profile: `${DUMMY_API_BASE}/users/1`,
};

export async function fetchJson(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}
