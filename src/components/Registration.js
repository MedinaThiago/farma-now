import * as React from "react";
import api from "../service/api";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "@mui/material/Button";

const Registration = () => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const registration = () => {
    var user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    api
      .post(`user/`, user)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  return (
    <div className="content-registration">
      <TextField id="outlined-basic" label="Nome" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        style={{ marginTop: "15px" }}
      />
      <FormControl
        sx={{ m: 1, width: "25ch", marginTop: "15px" }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button variant="contained">Salvar</Button>
    </div>
  );
};

export default Registration;
