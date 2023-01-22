import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '../App';
import Address from '../components/Address';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/address/:address" element={<Address />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
