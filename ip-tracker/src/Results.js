import React from 'react';

const Results = ({ data }) => {
  return (
    <div className='results-container'>

      <div className='results-col'>
        <div className='result-header'>IP ADDRESS</div>
        <div className='result-text'>{data.ip}</div>
      </div>

      <div className='results-col'>
        <div className='result-header'>LOCATION</div>
        <div className='result-text'>{data.location.city}, {data.location.region}{' '}
        {data.location.postalCode}</div>
      </div>

      <div className='results-col'>
        <div className='result-header'>TIMEZONE</div>
        <div className='result-text'>UTC {data.location.timezone}</div>
      </div>

      <div className='results-col'>
        <div className='result-header'>ISP</div>
        <div className='result-text'>{data.isp}</div>
      </div>
      
    </div>
  );
};

export default Results;
