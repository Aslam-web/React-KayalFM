// rename ResponsiveAppBar to <Header/>

import { Box, CssBaseline, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";

function Layout() {
  return (
    <>
      <CssBaseline />
      <Box className="layout_box">
        <NavBar />
        {/* Based on the route below content changes */}
        <Stack className="layout_box_stack" direction="row">
          <Outlet />
        </Stack>
      </Box>
    </>
  );
}
export default Layout;
