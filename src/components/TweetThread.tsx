import React from 'react';
import { Tweet } from 'react-twitter-widgets';
const TweetThread = () => {
  return (
    <div id="indicators-carousel" className="relative" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg bg-gray-800 md:h-96">
        <div
          className="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          {/* <div className="block-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tweet tweetId="1617589403622461440" />
          </div> */}
          <img
            src="/docs/images/carousel/carousel-1.svg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-2.svg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {/* <div className="block-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tweet tweetId="1617589405623128066" />
          </div> */}
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-3.svg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {/* <Tweet tweetId="1617589407917441025" /> */}
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-4.svg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {/* <Tweet tweetId="1617589413068038144" /> */}
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-5.svg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {/* <Tweet tweetId="1617589414485712897" /> */}
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-5.svg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {/* <Tweet tweetId="1617589416234733569" /> */}
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-5.svg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {/* <Tweet tweetId="1617589417669189632" /> */}
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-5.svg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
          {/* <Tweet tweetId="https://twitter.com/scammo_/status/1617589419078479872?s=20&t=5Gn6SKRJ8BUQwQh3Vbey9w" /> */}
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="true"
          aria-label="Slide 6"
          data-carousel-slide-to="5"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="true"
          aria-label="Slide 7"
          data-carousel-slide-to="6"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="true"
          aria-label="Slide 8"
          data-carousel-slide-to="7"
        ></button>
      </div>
      <button
        type="button"
        className="group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default TweetThread;
