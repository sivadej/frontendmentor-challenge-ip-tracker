import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './images/icon-location.svg';

const { REACT_APP_GOOGLE_API_KEY } = process.env;

const Map = ({ lat, lng }) => {
  const center = { lat, lng };

  return (
    (lat && lng) ? 
    <div className='map-component'>
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{
            language: 'en',
            key: REACT_APP_GOOGLE_API_KEY,
          }}
          center={center}
          defaultZoom={12}>
          <img src={Marker} alt='Map Marker' lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </div>
    : <div>Error rendering map</div>
  );
};

export default Map;
