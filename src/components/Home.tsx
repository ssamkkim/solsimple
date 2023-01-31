import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-2 xs:mt-0 font-extrabold text-transparent text-6xl xs:text-7xl sm:text-8xl bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
        Solsimple
      </div>
      <div className="mt-3 sm:mt-5 text-center font-bold text-xl xs:text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
        View transactions as simple as Solana
      </div>
    </div>
  );
};

export default Home;
