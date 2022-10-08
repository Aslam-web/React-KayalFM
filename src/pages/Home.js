import { useState } from "react";
import { Button, Box } from "@mui/material";
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
      <Box className="box" component="span">
        {/* <h1>APPLICATION HOME PAGE</h1>
        <Button>Save</Button> */}
      </Box>
      {/* <Button onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <VerifyMobileDialog openClose={open} handleClose={handleClose} mobile={mobileNumber}/> */}
    </>
  );
};

export default Home;
