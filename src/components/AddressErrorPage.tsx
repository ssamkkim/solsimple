import React from 'react';
import { Link } from 'react-router-dom';

const AddressErrorPage = (address: any) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 text-6xl font-bold tracking-wide">oops!</div>
      <div className="mx-3 mb-7 text-center text-xs xs:text-sm sm:text-xl">{`"${address.address}" is not a valid address`}</div>
      <Link to={`/`}>
        <button
          type="button"
          className="mb-2 flex items-center justify-center rounded-full bg-purple-700 px-6 py-3.5 text-center text-base font-medium tracking-widest text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          BACK TO HOME
          <svg
            aria-hidden="true"
            className="ml-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default AddressErrorPage;
