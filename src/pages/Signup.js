import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";

function Signup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ padding: "20px", marginTop: "50px", textAlign: "center" }}>
        <Typography variant="h4">{isLogin ? "Login" : "Sign Up"}</Typography>
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        {!isLogin && <TextField fullWidth label="Confirm Password" type="password" margin="normal" />}
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "20px" }}>
          {isLogin ? "Login" : "Sign Up"}
        </Button>
        <Typography 
          sx={{ marginTop: "15px", cursor: "pointer", color: "blue" }} 
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "New user? Sign Up" : "Already have an account? Login"}
        </Typography>
      </Paper>
    </Container>
  );
}

export default Signup;
