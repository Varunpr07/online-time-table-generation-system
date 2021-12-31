import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Navigate, useNavigate } from "react-router-dom";
import { useContextValue } from "./shared/contextProvider";
import { allActionTypes } from "./shared/reducer";

export default function SignUp() {
  const [{ user }, dispatch] = useContextValue();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    const data = new FormData(event.currentTarget);

    // eslint-disable-next-line no-console
    const inputs = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch({ type: allActionTypes.SETUSER, action: inputs });
    navigate("/");
  };

  if (user) {
    return <Navigate to="/" replace={true} state={user} />;
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullwidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullwidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="dept"
                  required
                  fullwidth
                  id="dept"
                  label="Department"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullwidth
                  id="section"
                  label="Section"
                  name="Section"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
            <Grid container justifyContent="space-around">
              <Grid item xs={12} sm={6}>
                <a href="/login" variant="body2">
                  Already have account? Sign In
                </a>
              </Grid>
              <Grid item>
                <a href="/=" variant="body2">
                  Home
                </a>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
