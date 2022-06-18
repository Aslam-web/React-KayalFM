import { Tab, Tabs } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";

import SignUp from "./SignUp";
import Login from "./Login";

const SignupLogin = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs className="test1" value={selectedTab} onChange={handleChange} >
        <Tab className="test2" icon={<LoginIcon />} label="Login"/>
        <Tab className="test3" icon={<AddBoxTwoToneIcon />} label="Sign Up" />
      </Tabs>
      {selectedTab === 0 && <Login />}
      {selectedTab === 1 && <SignUp />}
    </>
  );
};

export default SignupLogin;
