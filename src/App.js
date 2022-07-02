import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";

import Layout from "./components/Layout";
import Missing from "./pages/Missing";

import AdminHome from "./components/admin/AdminHome";
import Admins from "./components/admin/Admins";
import Budget from "./components/admin/Budget";
import Model from "./components/admin/Model";

import TPHome from "./components/tp/TPHome";
import InvoiceDetails from "./components/tp/InvoiceDetails";
import ContactDetails from "./components/tp/ContactDetails";
import ViewCampaign from "./components/tp/ViewCampaign";

import UserHome from "./components/user/UserHome";
import Campaign from "./components/user/Campaign";
import UpdateKycDetails from "./components/user/UpdateKycDetails";
import TermsAndConditions from "./components/user/TermsAndConditions";

import Home from "./pages/Home";
import SignupLogin from "./pages/signup/Index";
import Login from "./pages/signup/Login";
import Sidebar from "./components/common/sidebar/Sidebar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* Admin Login */}
        {/* TP Login */}
        {/* User Login/Signup */}
        <Route path="admin/login" element={<Login />} />
        <Route path="tp/login" element={<Login />} />
        <Route path="user/entry" element={<SignupLogin />} />

        <Route path="/" element={<Home />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[1001]} />}>
          <Route path="admin/" element={<AdminHome />} />
          <Route path="admin/admins" element={<Admins />} />
          <Route path="admin/budget" element={<Budget />} />
          <Route path="admin/model" element={<Model />} />
          <Route path="admin/sidebar" element={<Sidebar />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[1001]} />}>
          <Route path="tp/" element={<TPHome />} />
          <Route path="tp/invoicedetails" element={<InvoiceDetails />} />
          <Route path="tp/contactdetails" element={<ContactDetails />} />
          <Route path="tp/viewcampaign" element={<ViewCampaign />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[1001]} />}>
          <Route path="user/" element={<UserHome />} />
          <Route path="user/campaign" element={<Campaign />} />
          <Route path="user/updatekycdetails" element={<UpdateKycDetails />} />
          <Route path="user/termsandconditions" element={<TermsAndConditions />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
