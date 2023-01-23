import React from 'react';

const AddressSkeleton = () => {
  const iterateSkeletons = () => {
    const rows = [];
    for (let i = 0; i < 7; i++) {
      rows.push(
        <div className="flex items-start justify-between py-6">
          <div className="flex">
            <div className="flex items-center justify-center h-8 bg-gray-300 rounded w-8 dark:bg-gray-700 mr-3">
              <svg
                className="w-4 h-4 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div>
              <div className="w-44 h-2.5 mb-2.5 bg-gray-300 rounded-full dark:bg-gray-600"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
          </div>
          <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 w-10"></div>
        </div>
      );
    }
    return rows;
  };
  return (
    <div>
      <div
        role="status"
        className="max-w-3xl w-screen divide-y animate-pulse md:py-3"
      >
        <div className="flex items-start justify-between pb-6">
          <div className="flex">
            <div className="flex items-center justify-center h-8 bg-gray-300 rounded w-8 dark:bg-gray-700 mr-3">
              <svg
                className="w-4 h-4 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div>
              <div className="w-44 h-2.5 mb-2.5 bg-gray-300 rounded-full dark:bg-gray-600"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
          </div>
          <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 w-10"></div>
        </div>
        {iterateSkeletons()}
      </div>
    </div>
  );
};

export default AddressSkeleton;
