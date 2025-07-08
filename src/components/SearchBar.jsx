import React from 'react';

const SearchBar = () => (
  <form className="searchbar">
    <input
      type="text"
      placeholder="Search for resource here"
      className="searchbar-input"
    />
    <span className="searchbar-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="22" height="22">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
      </svg>
    </span>
  </form>
);

export default SearchBar; 