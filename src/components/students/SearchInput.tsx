import React, { FC } from "react";
import { SearchInputProps } from "../../lib/PropTypes";

const SearchInput: FC<SearchInputProps> = ( { searchTerm, setSearchTerm, onClear }) => {
    return (
        <div className="search-filter">
            <input
                type="text" 
                value={searchTerm} 
                placeholder="enter a name..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="clear-search" onClick={onClear}>x</button>
        </div>
    );
};

export default SearchInput;