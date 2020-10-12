import { IPIFY_API_KEY } from './config';

const apiRequest = async (ip) => {
  try {
    let res = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${IPIFY_API_KEY}&ipAddress=${ip}`
    );
    if (res.status === 200) return res.json();
  } catch (err) {
    return { error: err };
  }
};

export default apiRequest;
