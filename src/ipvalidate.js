const ipValidate = (ip) => {
  //allow empty input
  if (ip === '') return true;

  let ipRegex = new RegExp(
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  );
  return ipRegex.test(ip);
};

export default ipValidate;
