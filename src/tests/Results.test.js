import React from 'react';
import { render } from '@testing-library/react';
import Results from './../Results';

const testData = {
  ip: '1.2.3.4',
  location: {
    city: 'Testcity',
    region: 'TT',
    postalCode: '99999',
    timezone: '-10:00',
  },
  isp: 'Test ISP',
};

it('renders props', function () {
  const { getByText } = render(<Results data={testData} />);
  expect(getByText('1.2.3.4')).toBeInTheDocument();
  expect(getByText('Testcity, TT 99999')).toBeInTheDocument();
  expect(getByText('UTC -10:00')).toBeInTheDocument();
  expect(getByText('Test ISP')).toBeInTheDocument();
});

it('handles missing props', function () {
  const { getByText } = render(<Results />);
  expect(getByText('-.-.-.-')).toBeInTheDocument();
});
