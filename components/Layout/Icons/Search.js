import React from 'react';
// Icons
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
    return (
        <span
        className="flex items-center justify-center px-4 transition-colors cursor-pointer lg:flex h-14 lg:h-20 hover:bg-gray-300"
        //   onClick={() => setShowSearch(!showSearch)}
      >
        <span className="text-xl lg:text-3xl">
          <AiOutlineSearch  />
        </span>
      </span>
    );
}

export default Search;
