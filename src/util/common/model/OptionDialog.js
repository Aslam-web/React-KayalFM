import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function OptionDialog({
  dialogTitle,
  dialogContent,
  openClose,
  handleClose,
}) {
  return (
    <Dialog open={openClose} onClose={handleClose}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogContent}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Verify</Button>
      </DialogActions>
    </Dialog>
  );
}
