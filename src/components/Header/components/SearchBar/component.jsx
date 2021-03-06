import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function SearchBar(props) {
  const {
    handleSearch,
    placeholder,
    loading
  } = props;

  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <input
          placeholder = { placeholder }
          onChange = { handleSearch }
        />
      </div>
      {
        loading &&
        <div className="search-bar__loader">
          <Spinner
            animation="border"
            variant="info"
          />
        </div>
      }
      <div className="search-bar__button">
        <button>
          <img 
            src={
              require('../../../../Assets/images/search.svg')
            }
            alt={ 'Search icon' }
          />
        </button>
      </div>
    </div>
  )
}