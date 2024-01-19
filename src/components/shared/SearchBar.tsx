import React from "react";
import { IoIosSearch } from "@react-icons/all-files/io/IoIosSearch";

/**
 * TODOs
 * improve styling of the input field
 * Improve styling of search button
 * Add function as prop to define what to search (to search by key word in page content)
 */

const placeholder = "buscar tu interes"

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center gap-1">
        <input className="text-primary bg-transparent border-solid border-4 border-transparent border-b-background" placeholder={placeholder} />
        <button disabled={true} className="rounded-full border-solid border-black hover:bg-secondary p-2">
          <IoIosSearch />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
