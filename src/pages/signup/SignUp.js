// https://github.com/mui/material-ui/blob/v5.8.5/docs/data/material/getting-started/templates/sign-up/SignUp.js

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import { CssBaseline, InputLabel, MenuItem, Select } from "@mui/material";

import { register } from "../../Redux/features/auth/authSlice";
import VerifyMobileDialog from "../../components/signup/VerifyMobileDialog";

// Theme
const theme = createTheme();

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    org_name: "",
    state: "",
    city: "",
    industry: "",
    email: "",
    mobile: "",
    password: "",
    password2: "",
  });

  const {
    name,
    org_name,
    state,
    city,
    industry,
    email,
    mobile,
    password,
    password2,
  } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sign Up button clicked, event.target:" + event.target);
    if (password == null || password === "" || password !== password2) {
      toast.error("Passwords do not match");
      console.log("Passwords do not match");
    } else {
      toast.error("Passwords match");
      console.log("Passwords match");
      const userData = {
        name,
        org_name,
        state,
        city,
        industry,
        email,
        mobile,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Avatar / Logo */}
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            {/* Title*/}
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            {/* Form*/}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2} columnSpacing={1} rowSpacing={1}>
                <Grid item xs={12} sm={6} sx={{ pt: 0, pl: 0 }}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    id="name"
                    label="Name"
                    // value={formData.name}
                    defaultValue={formData.name}
                    onChange={onChange}
                    autoFocus
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="org_name"
                    id="org_name"
                    label="Company Name"
                    // value={formData.org_name}
                    defaultValue={formData.org_name}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="state">State</InputLabel>
                  <Select
                    name="state"
                    id="state"
                    label="Select State"
                    defaultValue={formData.state}
                    onChange={onChange}
                    required
                    fullWidth
                  >
                    <MenuItem value="TN">Tamil Nadu</MenuItem>
                    <MenuItem value="KR">Kerala</MenuItem>
                    <MenuItem value="AP">Andhra Pradesh</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="city">City</InputLabel>
                  <Select
                    name="city"
                    id="city"
                    label="Select City"
                    defaultValue={formData.city}
                    onChange={onChange}
                    required
                    fullWidth
                  >
                    <MenuItem value="TN-CH">Chennai</MenuItem>
                    <MenuItem value="KR-TVM">Thiruvananthapuram</MenuItem>
                    <MenuItem value="AP-NL">Nellore</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="industry">Industry</InputLabel>
                  <Select
                    name="industry"
                    id="industry"
                    label="Select Industry"
                    defaultValue={formData.industry}
                    onChange={onChange}
                    required
                    fullWidth
                  >
                    <MenuItem value="IT">IT</MenuItem>
                    <MenuItem value="BS">Business</MenuItem>
                    <MenuItem value="ED">Education</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="email"
                    name="email"
                    id="email"
                    label="Email"
                    // value={formData.email}
                    defaultValue={formData.email}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    name="mobile"
                    id="mobile"
                    label="Mobile Number"
                    // value={formData.mobile}
                    defaultValue={formData.mobile}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="outlined"
                    startIcon={<CheckIcon />}
                    onClick={VerifyMobileDialog({
                      openClose:true,
                      handleClose:()=>{},
                      mobile:9629906876
                    })}
                  >
                    Verify
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="password"
                    name="password"
                    id="password"
                    label="Password"
                    // value={formData.password}
                    defaultValue={formData.password}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="password"
                    name="password2"
                    id="password2"
                    label="Confirm Password"
                    // value={formData.password2}
                    defaultValue={formData.password2}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SignUp;
