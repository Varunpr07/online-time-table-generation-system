import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TimePicker } from "@mui/lab";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Navigate } from "react-router-dom";
import { useContextValue } from "./shared/contextProvider";

export default function Admin() {
  const [dept, setdept] = React.useState("CSE");
  const [sec, setsec] = React.useState("A");
  const [date, setdate] = React.useState(null);
  const [from, setfrom] = React.useState(null);
  const [to, setto] = React.useState();
  const [{ user }] = useContextValue();

  const handleDeptChange = (event) => {
    setdept(event.target.value);
  };
  const handleSecChange = (event) => {
    setsec(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  if (!user) {
    return <Navigate to="/login" replace={true} state={user} />;
  }

  return (
    <>
      <Container
        id="routine"
        component="main"
        maxWidth="xs"
        style={{ marginBottom: "5em" }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AdminPanelSettingsIcon />
          </Avatar>
          <h3>Create New Routine</h3>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Dept
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={dept}
                    onChange={handleDeptChange}
                    label="Department"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"CSE"}>CSE</MenuItem>
                    <MenuItem value={"IT"}>IT</MenuItem>
                    <MenuItem value={"ECE"}>ECE</MenuItem>
                    <MenuItem value={"EE"}>EE</MenuItem>
                    <MenuItem value={"FT"}>FT</MenuItem>
                    <MenuItem value={"CE"}>CE</MenuItem>
                    <MenuItem value={"ME"}>ME</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Dept
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={sec}
                    onChange={handleSecChange}
                    label="Department"
                  >
                    <MenuItem value={"A"}>A</MenuItem>
                    <MenuItem value={"A"}>B</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="class"
                  required
                  fullWidth
                  id="class"
                  label="Teacher Assigned"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="class"
                  required
                  fullWidth
                  id="class"
                  label="Class Location"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Start From"
                    value={date}
                    onChange={(newValue) => {
                      setdate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="From"
                    value={from}
                    onChange={(newValue) => {
                      setfrom(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                  />
                  <TimePicker
                    label="To"
                    value={to}
                    onChange={(newValue) => {
                      setto(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirm Your Password"
                  type="password"
                  id="password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I confirm all inputs are correctly mentioned."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="button button-primary button-wide-mobile"
              sx={{ mt: 3, mb: 2, textAlign: "center" }}
            >
              Add New Class To Time Table
            </Button>
          </Box>
        </Box>
      </Container>
      <Container component="main" maxWidth="md">
        <section className="section" style={{ marginBottom: "3em" }}>
          <div
            className="section-inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "3rem",
              paddingBottom: "3rem",
            }}
          >
            <h3 className="section-title mt-0">Administrator</h3>
            <div className="cta-cta">
              <a className="button button-primary button-wide-mobile" href="/">
                Create Announcement
              </a>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}