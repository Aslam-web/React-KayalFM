import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";

import Layout from "./components/Layout";
import Missing from "./pages/Missing";

import AdminList from "./components/admin/systemConfiguration/AdminList";
import ClusterOfClusterList from "./components/admin/systemConfiguration/ClusterOfClusterList";
import ClusterList from "./components/admin/systemConfiguration/ClusterList";

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

function App() {
  return (
    <div className="App_js">
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
          <Route path="admin/" element={<RequireAuth allowedRoles={[1001]} />}>
            <Route index element={<AdminList />} />
            <Route path="adminList" element={<AdminList />} />
            <Route path="clusterList" element={<ClusterList/>} />
            <Route path="clusterOfClusterlist" element={<ClusterOfClusterList/>} />
          </Route>
          <Route path="tp/" element={<RequireAuth allowedRoles={[1001]} />}>
            <Route index element={<TPHome />} />
            <Route path="invoicedetails" element={<InvoiceDetails />} />
            <Route path="contactdetails" element={<ContactDetails />} />
            <Route path="viewcampaign" element={<ViewCampaign />} />
          </Route>
          <Route path="user/" element={<RequireAuth allowedRoles={[1001]} />}>
            <Route element={<UserHome />} />
            <Route path="campaign" element={<Campaign />} />
            <Route path="updatekycdetails" element={<UpdateKycDetails />} />
            <Route path="termsandconditions" element={<TermsAndConditions />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
