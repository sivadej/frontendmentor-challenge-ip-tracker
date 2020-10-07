import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './images/icon-location.svg';

const Map = ({ lat, lng }) => {
  const center = { lat, lng };

  return (
    <div className='map-component'>
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{
            language: 'en',
            key: 'AIzaSyC4DiMBB4TYTywdpdauGjU91WXPMRlta3I',
          }}
          center={center}
          defaultZoom={12}>
          <img src={Marker} alt='Map Marker' lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
