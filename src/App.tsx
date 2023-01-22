import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { parseTransaction } from './api/parseTransaction';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

function App() {
  const [transaction, setTransaction] = useState();
  const [searchParam, setSearchParam] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (searchParam) {
      navigate(`/address/${searchParam}`);
    }
  }, [searchParam]);

  return (
    <div className="bg-white min-h-screen h-full">
      <div className="flex flex-col items-center mx-auto sm:px-4 xl:max-w-7xl">
        <SearchBar setSearchParam={setSearchParam} />
        <Outlet />
        {/* <Card transaction={transaction} /> */}
      </div>
    </div>
  );
}

export default App;
