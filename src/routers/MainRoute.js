// Admin        Employee/Staff
// TradePartner Agent
// Advertiser   User/Outside

import React from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import AdvertiserRoute from './AdvertiserRoute';
import Home from "../pages/Home";
import ResponsiveAppBar from "../components/controls/ResponsiveAppBar";

const MainRoute = () => {
    return (
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home/>}/>                 
          <Route path="/admin" element={<AdminRoute/>}/>
          <Route path="/user" element={<UserRoute/>}/>
          <Route path="/advertiser" element={<AdvertiserRoute/>}/>
        </Routes>
      </BrowserRouter>

    );
}

export default MainRoute