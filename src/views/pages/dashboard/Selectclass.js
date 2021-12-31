import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function Selectclass(props) {
  return (
    <Container maxWidth="lg" style={{ width: "100%", marginBottom: "5rem" }}>
      <Box
        sx={{
          display: "flex",
          mt: "3rem",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ alignSelf: "flex-start" }}>
          <h3 style={{ margin: 0 }}>Fetch Another routine </h3>
        </Box>

        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Dept</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={props.dept}
              onChange={props.onDeptSet}
              label="Department"
            >
              <MenuItem value="CSE">
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
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Sec</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={props.sec}
              onChange={props.onSecSet}
              label="Section"
            >
              <MenuItem value={"A"}>A</MenuItem>
              <MenuItem value={"B"}>B</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
}
