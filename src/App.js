import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";

import Layout from "./layouts/Layout";
import Missing from "./pages/Missing";

import AdminLogin from './components/admin/AdminLogin'
import AdminLayout from "./layouts/AdminLayout";
import AdminList from "./components/admin/systemConfiguration/AdminList";
import ClusterOfClusterList from "./components/admin/systemConfiguration/ClusterOfClusterList";
import ClusterList from "./components/admin/systemConfiguration/ClusterList";

import TPLogin from "./components/tp/TPLogin"
import TPLayout from "./layouts/TPLayout"
import InvoiceDetails from "./components/tp/InvoiceDetails";
import ContactDetails from "./components/tp/ContactDetails";
import ViewCampaign from "./components/tp/ViewCampaign";

import UserLogin from "./components/user/login/UserLogin";
import UserLayout from "./layouts/UserLayout";
import Campaign from "./components/user/Campaign";
import UpdateKycDetails from "./components/user/UpdateKycDetails";
import TermsAndConditions from "./components/user/TermsAndConditions";

import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Public routes */}
        <Route index element={<Welcome />} />

        {/* Protected routes */}
        <Route path="user" element={<UserLayout />}>
          <Route index element={<UserLogin />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="campaign" element={<Campaign />} />
          <Route path="updatekycdetails" element={<UpdateKycDetails />} />
          <Route path="termsandconditions" element={<TermsAndConditions />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminLogin />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="adminList" element={<AdminList />} />
          <Route path="clusterList" element={<ClusterList />} />
          <Route path="clusterOfClusterlist" element={<ClusterOfClusterList />} />
        </Route>

        <Route path="tp" element={<TPLayout />}>
          <Route index element={<TPLogin />} />
          <Route path="login" element={<TPLogin />} />
          <Route path="invoicedetails" element={<InvoiceDetails />} />
          <Route path="contactdetails" element={<ContactDetails />} />
          <Route path="viewcampaign" element={<ViewCampaign />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
