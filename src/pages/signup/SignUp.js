import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel, MenuItem, Select } from "@mui/material";

// Theme
const theme = createTheme();

const SignUp = () => {
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sign Up From submitted " + event.target.value);
  };

  const handleOnStateChange = (event) => {
    console.log("State Has been changed " + event.target.value);
    setState(event.target.value);
  };

  const handleOnCityChange = (event) => {
    console.log("City Has been changed " + event.target.value);
    setCity(event.target.value);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          {/* <CssBaseline /> */}
          <Box
            sx={{
              marginTop: 8,
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
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="companyName"
                    required
                    fullWidth
                    id="companyName"
                    label="Company Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="selectState">State</InputLabel>
                  <Select
                    name="selectState"
                    required
                    fullWidth
                    id="selectState"
                    label="Select State"
                    value={state}
                    onChange={handleOnStateChange}
                  >
                    <MenuItem value="TN">Tamil Nadu</MenuItem>
                    <MenuItem value="KR">Kerala</MenuItem>
                    <MenuItem value="AP">Andhra Pradesh</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="selectCity">City</InputLabel>
                  <Select
                    name="selectCity"
                    required
                    fullWidth
                    id="selectCity"
                    label="Select City"
                    value={city}
                    onChange={handleOnCityChange}
                  >
                    <MenuItem value="TN-CH">Chennai</MenuItem>
                    <MenuItem value="KR-TVM">Thiruvananthapuram</MenuItem>
                    <MenuItem value="AP-NL">Nellore</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    name="number"
                    required
                    fullWidth
                    id="number"
                    label="Mobile Number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="password"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="confirmPassword"
                    required
                    fullWidth
                    id="confirmPassword"
                    label="Confirm Password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SignUp;
