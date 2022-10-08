import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";

const options = [
  "admin",
  "campaignAdmin",
  "userAdmin",
  "packageAdmin",
  "couponAdmin",
  "audioAdmin",
  "financeAdmin",
];

export default function AdminAddDialog({ openOrClose, handleClose }) {
  const [formData, setFormData] = useState({
    role: "admin",
    email: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //  Add admin functionality - to be dispatched to backend API with props
  const addAdmin = () => {
    const { email } = formData;
    let domain = email.slice(email.lastIndexOf("@") + 1);
    console.log("Email domain", domain);
    if (email === "") {
      alert("Email can not be blank!");
    } else if (domain !== "buyadsonbigfm.com" && domain !== "radiobigfm.com") {
      alert(
        "Email must contain either buyadsonbigfm.com or radiobigfm.com domain!"
      );
    } else {
      alert("Admin Added successfully");
    }
  };

  return (
    <Dialog
      open={openOrClose}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="xs"
    >
      <DialogTitle>Add Admin</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please Enter The Admin Details Below
        </DialogContentText>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Select
            name="adminRole"
            id="adminRole"
            label="Admin Role"
            defaultValue={formData.role}
            onChange={onChange}
            required
            fullWidth
          >
            {options.map((role, index) => (
              <MenuItem key={index} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
          <TextField
            autoFocus
            name="email"
            margin="dense"
            id="email"
            label="Email"
            type="email"
            onChange={onChange}
            fullWidth
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={addAdmin}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
