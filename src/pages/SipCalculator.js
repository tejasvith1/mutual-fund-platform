import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";

function SipCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const futureValue = amount * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);
    setResult(futureValue.toFixed(2));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ padding: "20px", marginTop: "50px", textAlign: "center" }}>
        <Typography variant="h4">SIP Calculator</Typography>
        <TextField fullWidth label="Monthly Investment (₹)" value={amount} onChange={(e) => setAmount(e.target.value)} margin="normal" />
        <TextField fullWidth label="Expected Return Rate (%)" value={rate} onChange={(e) => setRate(e.target.value)} margin="normal" />
        <TextField fullWidth label="Investment Period (Years)" value={years} onChange={(e) => setYears(e.target.value)} margin="normal" />
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "20px" }} onClick={calculateSIP}>
          Calculate
        </Button>
        {result && <Typography variant="h6" sx={{ marginTop: "20px" }}>Future Value: ₹{result}</Typography>}
      </Paper>
    </Container>
  );
}

export default SipCalculator;
