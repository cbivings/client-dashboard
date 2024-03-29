import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../assets/js/theme";
import { login } from "../services/api";
import App from '../App.jsx'

const style = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#ed762f",
      color: "#ed762f"
    }
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused ": {
      borderColor: "#ed762f",
      color: "#ed762f"
    }
  }
}    

export default function Login() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    const response = login(email.value, password.value)
      .then((result) => {
      const data = result.data;
      localStorage.setItem("token", result.token);
      window.location.reload();
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" background="primary.light">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <Box component="img" 
            sx={{ maxHeight:'1.5em', width:'5em', p: 0 }}
            src="/finnifox.svg">
          </Box>
          </Avatar>
          <Typography component="h1" variant="h5" color="palette.primary.dark">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={style}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={style}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="primary.dark">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color="primary.dark">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}