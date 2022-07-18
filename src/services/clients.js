// llamado con request y response a aws

const API_URL = 'https://63pxm8oa8e.execute-api.us-east-1.amazonaws.com/bancoOcc';

export async function getClients() {
  const response = await fetch(`${API_URL}?nit=123`,{
    mode: 'cors',
  });
  const data = await response.json();
  console.log(data);
  return data;
}