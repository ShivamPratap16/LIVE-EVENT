// SettingsPage.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Grid,
  Box,
} from "@mui/material";

const SettingsPage = () => {
  return (
    <Card
      sx={{
        maxWidth: "80%",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", marginBottom: "30px", color: "#2E3B55" }}
        >
          Settings
        </Typography>

        {/* Account Settings */}
        <Box
          marginBottom="30px"
          sx={{ padding: "15px", borderRadius: "8px", backgroundColor: "#F7F7F7" }}
        >
          <Typography variant="h6" sx={{ marginBottom: "10px", color: "#3A506B" }}>
            Account Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "15px" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "15px" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "15px" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>

        {/* Notification Settings */}
        <Box
          marginBottom="30px"
          sx={{ padding: "15px", borderRadius: "8px", backgroundColor: "#F7F7F7" }}
        >
          <Typography variant="h6" sx={{ marginBottom: "10px", color: "#3A506B" }}>
            Notification Preferences
          </Typography>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Email Notifications"
            sx={{ marginBottom: "10px", color: "#2E3B55" }}
          />
          <FormControlLabel
            control={<Switch />}
            label="SMS Notifications"
            sx={{ marginBottom: "10px", color: "#2E3B55" }}
          />
          <FormControlLabel
            control={<Switch />}
            label="Push Notifications"
            sx={{ marginBottom: "10px", color: "#2E3B55" }}
          />
        </Box>

        {/* Save and Cancel Buttons */}
        <Box display="flex" justifyContent="space-around" marginTop="30px">
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#2E86C1" }}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ borderColor: "#B03A2E", color: "#B03A2E" }}
          >
            Cancel
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
