import React, { useState } from 'react';

const SearchBar = ({ changeIP }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (value) => {
    const newValue = value;
    setSearchText(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeIP(searchText);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className='search-input'
          type='text'
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className='search-btn' type='submit'>
          >
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
