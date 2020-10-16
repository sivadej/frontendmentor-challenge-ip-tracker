import ipValidate from './../ipvalidate';

it('handles valid IPv4 addresses', ()=> {
  expect(ipValidate('8.8.4.4')).toBe(true);
  expect(ipValidate('255.255.255.255')).toBe(true);
  expect(ipValidate('255.1.255.0')).toBe(true);
});

it('handles invalid IPv4 addresses', ()=> {
  expect(ipValidate('999.1.2.3')).toBe(false);
  expect(ipValidate('1.2.3.4.5')).toBe(false);
  expect(ipValidate('-1.0.0.0')).toBe(false);
});

it('allows an empty string input', ()=> {
  expect(ipValidate('')).toBe(true);
  expect(ipValidate(null)).toBe(false);
  expect(ipValidate(undefined)).toBe(false);
});

it('handles invalid types', ()=> {
  expect(ipValidate('abcdefg')).toBe(false);
  expect(ipValidate({})).toBe(false);
  expect(ipValidate([])).toBe(false);
  expect(ipValidate(true)).toBe(false);
  expect(ipValidate(999)).toBe(false);
});