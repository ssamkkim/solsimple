import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { parseTransaction } from './api/parseTransaction';
import Card from './components/Card';
import Footer from './components/Footer';
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
    <div className="flex flex-col justify-between min-h-screen h-full overflow-y-auto">
      <div className="bg-white">
        <div className="flex flex-col items-center mx-auto px-2 lg:px-12 xl:max-w-7xl">
          <SearchBar setSearchParam={setSearchParam} />
          <Outlet />
          {/* <Card transaction={transaction} /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
