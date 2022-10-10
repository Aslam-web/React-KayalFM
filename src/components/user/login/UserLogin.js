import React from "react";

import { Box, Tab, Tabs } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import Login from "./Login";
import SignUp from "./SignUp";

const UserLogin = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Tabs centered value={selectedTab} onChange={handleChange}>
        <Tab icon={<LoginIcon />} label="Login" />
        <Tab icon={<AddBoxTwoToneIcon />} label="Sign Up" />
      </Tabs>
      {selectedTab === 0 && <Login />}
      {selectedTab === 1 && <SignUp />}
    </Box>
  );
}

export default UserLogin
