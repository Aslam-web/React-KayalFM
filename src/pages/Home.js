import { useState } from "react";
import { Button } from "@mui/material";
import VerifyMobileDialog from "../components/signup/VerifyMobileDialog";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var mobileNumber = 6379971782;

  return (
    <>
      <h1>APPLICATION HOME PAGE</h1>
      <Button onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <VerifyMobileDialog openClose={open} handleClose={handleClose} mobile={mobileNumber}/>
    </>
  );
};

export default Home;
