import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-6xl font-extrabold text-transparent xs:mt-0 xs:text-7xl sm:text-8xl">
        Solsimple
      </div>
      <div className="mt-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-center text-xl font-bold text-transparent xs:text-2xl sm:mt-5 sm:text-3xl">
        View transactions as simple as Solana
      </div>
    </div>
  );
};

export default Home;
