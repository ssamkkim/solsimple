import React from 'react';

import { parseAddressTransactions } from '../api/parseAddressTransactions';
import { parseTransaction } from '../api/parseTransaction';

interface SearchBarProps {
  // setTransaction?: (transaction: any) => void;
  setSearchParam: (searchParam: string) => void;
}

const SearchBar = ({ setSearchParam }: SearchBarProps) => {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTerm = event.currentTarget.searchTerm.value;
    setSearchParam(searchTerm);
    // navigate(`/address/${searchTerm}`);
    // let data = parseAddressTransactions(searchTerm, setTransaction);
    // let data = parseTransaction(searchTerm, setTransaction);
  };

  return (
    <form
      className="lg:max-w-5xl lg:mt-16 lg:mb-8 w-full"
      onSubmit={handleSearch}
    >
      <label
        // htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          name="searchTerm"
          id="searchTerm"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by address..."
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
