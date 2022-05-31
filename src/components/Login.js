import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Login2 from "./Login2";
import Registration from "./Registration";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Login = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="login-panel">
      <Box
        sx={{ width: "80%", height: "80%", borderRadius: "5px", maxWidth: "400px",  maxHeight: "350px"}}
        className="login-panel-box"
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider",  }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Cadastrar" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} style={{display: "flex", alignItems: "center",  justifyContent: "center",  flexFlow: "column"}}>
          <Login2 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Registration />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Login;
