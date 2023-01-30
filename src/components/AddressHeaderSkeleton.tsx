import React from 'react';

const AddressHeaderSkeleton = () => {
  return (
    <div className="ml-2 lg:mx-0 mt-1 mb-2">
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default AddressHeaderSkeleton;
