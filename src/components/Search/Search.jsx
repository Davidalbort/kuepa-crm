import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
    return(
        <div className="container-search">
            <BsSearch/>
            <input id='search' type='search' name='search' placeholder='Search...'/>
            <label htmlFor='search'></label>
        </div>
    )
}

export { Search };