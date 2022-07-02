import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import MainRoute from "../routers/MainRoute";
import ResponsiveAppBar from "./common/ResponsiveAppBar";

function Layout() {
  return (
    <>
      {/* <MainRoute/> */}

      <CssBaseline />
      <main className="App">
        <ResponsiveAppBar />
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
