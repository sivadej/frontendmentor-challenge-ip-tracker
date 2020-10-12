import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import Map from './Map';
import Results from './Results';
import SearchBar from './SearchBar';
import apiRequest from './api';
import { ReactQueryDevtools } from 'react-query-devtools';
import ipValidate from './ipvalidate';

const options = { refetchOnWindowFocus: false, refetchOnMount: false };

function App() {
  const [ip, setIp] = useState('8.8.8.8');

  const { isLoading, error, data, refetch } = useQuery(
    'search',
    () => apiRequest(ip),
    options
  );

  const changeIP = (newIp) => {
    if (ipValidate(newIp)) setIp(newIp);
    // TODO: else toggle validation warning
  };

  // TODO: function toggleValidationWarning
  // Show user message on invalid form submission

  useEffect(() => {
    refetch();
  }, [ip, refetch]);

  if (isLoading) return 'loading...';
  if (error) return 'an error occurred:' + error.message;

  return (
    <div className='main'>

      <div className='map-container'>
        <div className='top-image'></div>
        <Map lat={data.location.lat} lng={data.location.lng} />
      </div>

      <div className='tracker-container'>
        <h1>IP Address Tracker</h1>
        <SearchBar changeIP={changeIP} refetch={refetch} />
        <Results data={data} />
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
