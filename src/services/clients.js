
const API_URL = import.meta.env.VITE_APP_API_BASE_URL



export async function getClients() {
  const response = await fetch(`${API_URL}?nit=800220154`);
  const data = await response.json();
  return data;
}