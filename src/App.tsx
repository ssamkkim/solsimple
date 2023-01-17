import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import { parseTransaction } from './parseTransaction';

function App() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default App;
