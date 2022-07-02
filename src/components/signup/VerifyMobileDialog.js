import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function VerifyMobileDialog({ openClose, handleClose, mobile }) {
  return (
    <div>
      <Dialog open={openClose} onClose={handleClose}>
        <DialogTitle>Verify Mobile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please verify your mobile number : <b>{mobile}</b>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter OTP"
            type="number"
            InputProps={{
              inputProps: {
                max: 100,
                min: 10,
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Verify</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
