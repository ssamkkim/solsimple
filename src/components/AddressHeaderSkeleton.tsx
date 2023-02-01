import React from 'react';

const AddressHeaderSkeleton = () => {
  return (
    <div className="ml-2 mt-1 mb-2 lg:mx-0">
      <div role="status" className="max-w-sm animate-pulse">
        <div className="mb-4 h-8 w-36 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-4 h-2.5 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default AddressHeaderSkeleton;
