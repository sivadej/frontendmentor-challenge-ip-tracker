import React from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerIcon from './images/icon-location.svg';

const { REACT_APP_GOOGLE_API_KEY } = process.env;

const Marker = ({lat,lng}) => {
  return (
    <div>
      <img src={MarkerIcon} alt='Map Marker' lat={lat} lng={lng} />
    </div>
  )
}

const Map = ({ lat, lng }) => {
  const center = { lat, lng };

  return (
    (lat && lng) ? 
    <div className='map-component' data-testid='map-component'>
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{
            language: 'en',
            key: REACT_APP_GOOGLE_API_KEY,
          }}
          center={center}
          defaultZoom={12}>
          <Marker lat={lat} lng={lng}/>
        </GoogleMapReact>
      </div>
    </div>
    : <div>Error rendering map</div>
  );
};

export default Map;
