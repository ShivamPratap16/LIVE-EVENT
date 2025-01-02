// PromotionalCampaigns.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Box,
} from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import EmailIcon from "@mui/icons-material/Email";
import SmsIcon from "@mui/icons-material/Sms";
import SocialIcon from "@mui/icons-material/Public";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const PromotionalCampaigns = () => {
  const [campaignType, setCampaignType] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");

  const handleReset = () => {
    setCampaignType("");
    setMessageContent("");
    setScheduleDate("");
  };
  const navigate = useNavigate();

  const handleLaunchCampaign = () => {
    // Add any submit logic here if needed
    navigate('/monitor-engagement');
  };



  return (
    <Card
      sx={{
        maxWidth: "80%",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#fefefe",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#2E3B55",
          }}
        >
          Promotional Campaigns
        </Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Campaign Type"
              fullWidth
              variant="outlined"
              value={campaignType}
              onChange={(e) => setCampaignType(e.target.value)}
              sx={{ backgroundColor: "#F7F7F7" }}
            >
              <MenuItem value="Push Notification">
                <CampaignIcon sx={{ marginRight: "10px" }} /> Push Notification
              </MenuItem>
              <MenuItem value="Email">
                <EmailIcon sx={{ marginRight: "10px" }} /> Email Campaign
              </MenuItem>
              <MenuItem value="SMS">
                <SmsIcon sx={{ marginRight: "10px" }} /> SMS Blast
              </MenuItem>
              <MenuItem value="Social Media">
                <SocialIcon sx={{ marginRight: "10px" }} /> Social Media Post
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Schedule Date"
              type="date"
              fullWidth
              variant="outlined"
              value={scheduleDate}
              onChange={(e) => setScheduleDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ backgroundColor: "#F7F7F7" }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Message Content"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              sx={{ backgroundColor: "#F7F7F7" }}
            />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="space-between" marginTop="30px">
          <Button
            variant="contained"
            color="primary"
            startIcon={<CampaignIcon />}
            sx={{ backgroundColor: "#3A506B" }}
            onClick={handleLaunchCampaign}
            
          >
            Launch Campaign
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<RestartAltIcon />}
            onClick={handleReset}
            sx={{ color: "#B03A2E", borderColor: "#B03A2E" }}
          >
            Reset
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PromotionalCampaigns;
