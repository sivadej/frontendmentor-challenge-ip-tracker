const SAMPLE_DATA = {
  "ip": "24.237.85.203",
  "location": {
    "country": "US",
    "region": "Alaska",
    "city": "Anchorage",
    "lat": 61.190395,
    "lng": -149.89041,
    "postalCode": "99503",
    "timezone": "-08:00",
    "geonameId": 5879400
  },
  "domains": [
    "203-85-237-24.gci.net"
  ],
  "as": {
    "asn": 8047,
    "name": "General Communications Incorp",
    "route": "24.237.0.16",
    "domain": "https:www.gci.com",
    "type": "NSP"
  },
  "isp": "GENERAL COMMUNICATION, INC.",
  "proxy": {
    "proxy": false,
    "vpn": false,
    "tor": false
  }
}

const apiRequest = async (ip) => {
  console.log('fetching data for',ip)
  const queryString = `https://geo.ipify.org/api/v1?apiKey=at_Q8xNKcaVHJxzilQI9tmlKWV0kqJr8&ipAddress=${ip}`
  return fetch(queryString).then(res => res.json());
  // console.log('using sample data')
  // return SAMPLE_DATA;
}

export default apiRequest;