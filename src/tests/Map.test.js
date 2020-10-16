import React from 'react';
import { render } from '@testing-library/react';
import Map from './../Map';


it('renders map with props', function () {
  const { getByAltText, queryByTestId } = render(<Map lat={41.40338} lng={2.17403}/>);
  const marker = getByAltText('Map Marker');
  expect(marker).toBeInTheDocument();
  expect(queryByTestId('map-component')).toBeInTheDocument();
});


it('displays error when missing props', function () {
  const { queryByTestId, queryAllByAltText, getByText } = render(<Map />);
  expect(getByText('Error rendering map')).toBeInTheDocument()
  expect(queryAllByAltText('Map Marker')).toHaveLength(0);
  expect(queryByTestId('map-component')).toBeNull();
});