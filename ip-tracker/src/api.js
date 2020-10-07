import IPIFY_API_KEY from './config';

const apiRequest = async (ip) => {
  console.log('fetching data for',ip)
  const queryString = `https://geo.ipify.org/api/v1?apiKey=${IPIFY_API_KEY}&ipAddress=${ip}`
  return fetch(queryString).then(res => res.json());
}

export default apiRequest;