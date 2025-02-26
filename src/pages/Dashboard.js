import React from "react";
import { Container, Typography, Paper } from "@mui/material";

function Dashboard() {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: "20px", marginTop: "50px", textAlign: "center" }}>
        <Typography variant="h4">Client Dashboard</Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          Here, you can view your investment valuations and details.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Dashboard;
