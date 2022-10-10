import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login } from "../../Redux/features/auth/authSlice";

// Theme
const theme = createTheme();

const TPLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // handleSubmit
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Login From submitted");
    dispatch(login({ email: formData.email, password: formData.password }));
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Trade Partner Sign in
            </Typography>
            <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                id="email"
                label="Email Address"
                name="email"
                defaultValue={formData.email}
                onChange={onChange}
                required
                fullWidth
                autoFocus
              />
              <TextField
                margin="normal"
                name="password"
                label="Password"
                type="password"
                id="password"
                defaultValue={formData.password}
                onChange={onChange}
                required
                fullWidth
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
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

export default TPLogin;
