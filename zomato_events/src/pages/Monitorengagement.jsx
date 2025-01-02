// MonitorEngagement.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { PieChart } from '@mui/x-charts';

import InsertChartIcon from "@mui/icons-material/InsertChart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PreviewIcon from "@mui/icons-material/Preview";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const MonitorEngagement = () => {
  const [postMetrics, setPostMetrics] = useState([
    { label: "Likes", value: 120 },
    { label: "Shares", value: 60 },
    { label: "Comments", value: 40 },
    { label: "Reach", value: 500 },
  ]);

  const [schedule, setSchedule] = useState([
    { date: "2024-12-01", platform: "Facebook", content: "Holiday Sale Promo" },
    { date: "2024-12-02", platform: "Instagram", content: "New Product Launch" },
  ]);

  return (
    <Card
      sx={{
        maxWidth: "90%",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#f9f9f9",
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
          Monitor Engagement
        </Typography>

        <Grid container spacing={4}>
          {/* Engagement Metrics */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Engagement Metrics
            </Typography>
            <PieChart
              series={[{
                data: postMetrics,
                highlightScope: { fade: "global", highlight: "item" },
                faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              }]}
              height={200}
            />
          </Grid>

          {/* Social Media Scheduler */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Social Media Scheduler
            </Typography>
            <Box
              sx={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
                backgroundColor: "#fff",
              }}
            >
              {schedule.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    marginBottom: "10px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    backgroundColor: "#f7f7f7",
                  }}
                >
                  <Typography variant="body1">
                    <strong>Date:</strong> {item.date}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Platform:</strong> {item.platform}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Content:</strong> {item.content}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} marginTop={3}>
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<InsertChartIcon />}
              sx={{ width: "100%" }}
            >
              View Insights
            </Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<CalendarTodayIcon />}
              sx={{ width: "100%" }}
            >
              Schedule Post
            </Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              color="success"
              startIcon={<NotificationsActiveIcon />}
              sx={{ width: "100%" }}
            >
              Set Notifications
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={4} marginTop={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Post Preview
            </Typography>
            <TextField
              label="Enter Post Content"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              sx={{ backgroundColor: "#fff" }}
            />
            <Button
              variant="contained"
              color="info"
              startIcon={<PreviewIcon />}
              sx={{ marginTop: "10px", width: "100%" }}
            >
              Preview Post
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonitorEngagement;
