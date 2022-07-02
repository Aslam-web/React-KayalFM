// Admin        Employee/Staff
// TradePartner Agent
// Advertiser   User/Outside

import React from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import AdminRoute from './AdminRoute';
import AdvertiserRoute from './AdvertiserRoute';
import TPRoute from './TPRoute';
import Home from "../pages/Home";
import ResponsiveAppBar from "../components/common/ResponsiveAppBar";

const MainRoute = () => {
    return (
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home/>}/>                 
          <Route path="/admin" element={<AdminRoute/>}/>
          <Route path="/tp" element={<TPRoute/>}/>
          <Route path="/advertiser" element={<AdvertiserRoute/>}/>
        </Routes>
      </BrowserRouter>

    );
}

export default MainRoute