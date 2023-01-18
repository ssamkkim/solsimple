import { useEffect, useState } from 'react';
import { parseTransaction } from './api/parseTransaction';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="flex flex-col items-center mx-auto sm:px-4 xl:max-w-7xl">
      <SearchBar />
      <Card />
    </div>
  );
}

export default App;
