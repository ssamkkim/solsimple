import { useEffect, useState } from 'react';
import { parseTransaction } from './api/parseTransaction';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

function App() {
  const [transaction, setTransaction] = useState();
  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <div className="flex flex-col items-center mx-auto sm:px-4 xl:max-w-7xl">
        <SearchBar setTransaction={setTransaction} />
        <Card transaction={transaction} />
      </div>
    </div>
  );
}

export default App;
