import React from 'react';

import LayoutContent from '../components/LayoutContent';
import SearchBox from '../components/Search/SearchBox';
import SearchResult from '../components/Search/SearchResult';

import '../styles/Search.scss';

const Search = () => (
  <LayoutContent>
    <h5 className="mb-3">Search your friends</h5>
    <SearchBox />
    <hr />
    <SearchResult />
  </LayoutContent>
);

export default Search;
