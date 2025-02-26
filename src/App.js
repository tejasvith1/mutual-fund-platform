import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, CssBaseline, ThemeProvider, createTheme, Container } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SipCalculator from "./pages/SipCalculator";
import Home from "./pages/Home"; // ✅ Importing Home from the correct path

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({ palette: { mode: darkMode ? "dark" : "light" } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Tejas Vithalani MF Platform
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            <Button color="inherit" component={Link} to="/sip-calculator">SIP Calculator</Button>
            <Button color="inherit" component={Link} to="/signup">Login</Button>
            <Button color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sip-calculator" element={<SipCalculator />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
