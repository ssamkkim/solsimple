import React from 'react';
import { Tweet } from 'react-twitter-widgets';
import TweetThread from './TweetThread';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-6xl font-extrabold text-transparent xs:mt-0 xs:text-7xl sm:text-8xl">
        Solsimple
      </div>
      <div className="mt-3 mb-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-center text-xl font-bold text-transparent xs:text-2xl sm:mt-5 sm:text-3xl">
        View transactions as simple as Solana
      </div>
      <Tweet
        tweetId="1617589403622461440"
        options={{ theme: 'light', width: '550' }}
      />
    </div>
  );
};

export default Home;
