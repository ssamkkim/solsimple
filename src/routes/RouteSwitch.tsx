import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '../App';
import Address from '../components/Address';
import Home from '../components/Home';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/address/:address" element={<Address />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
