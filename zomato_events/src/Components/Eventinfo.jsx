// EventDashboard.js
import React, { useState } from "react";
import { Chart } from 'react-google-charts';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
  TextField,
  IconButton,
  CircularProgress,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ReactApexChart from "react-apexcharts";
import TickPlacementBars from "./TickPlacementBars";

const EventDashboard = () => {
  const [ticketSales, setTicketSales] = useState({
    labels: ["Day 1", "Day 2", "Day 3"],
    series: [
      {
        name: "Tickets Sold",
        data: [150, 200, 250],
      },
    ],
  });
  const data = [
    ['Country', 'Revenue'],
    ['India', 2000],
    ['United States', 3000],
    ['China', 4000],
    ['Germany', 2500],
    ['Brazil', 1500],
    ['France', 1800],
    ['Japan', 2200],
    ['Australia', 1700],
    ['Canada', 2100],
  ];
  const options = {
    region: 'world', // Set the region for global map, can be specific like 'IN' for India, 'US' for USA
    colorAxis: { colors: ['#e0f7fa', '#006064'] }, // Gradient for revenue
    backgroundColor: '#f4f4f4',
    datalessRegionColor: '#f0f0f0', // Color for regions without data
    defaultColor: '#cccccc',
  };
  const [mediaFiles, setMediaFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleMediaUpload = (event) => {
    const files = Array.from(event.target.files);
    setIsUploading(true);

    setTimeout(() => {
      setMediaFiles((prev) => [...prev, ...files]);
      setIsUploading(false);
    }, 1000); // Simulating upload time
  };
  const totalTicketsSold = ticketSales.series[0].data.reduce(
    (total, num) => total + num,
    0
  );

  const handleDownloadCSV = () => {
    const csvData = [
      ["Day", "Tickets Sold"],
      ...ticketSales.labels.map((label, index) => [
        label,
        ticketSales.series[0].data[index],
      ]),
    ];

    const csvContent = csvData
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ticket_sales.csv";
    link.click();
    URL.revokeObjectURL(url); // Clean up the URL object
  };

  return (
    <Card
      sx={{
        maxWidth: "90%",
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
          Event Dashboard
        </Typography>
   {/* Total Tickets Sold */}
   <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: "#E8F5E9",
          }}
        >
          <Typography variant="h5" sx={{ color: "#388E3C" }}>
            Total Tickets Sold: {totalTicketsSold}
          </Typography>
          <Button
            variant="contained"
            color="success"
            onClick={handleDownloadCSV}
            sx={{ backgroundColor: "#388E3C" }}
          >
            Download CSV
          </Button>
        </Box>
        <Box
          marginBottom="30px"
          sx={{ padding: "15px", borderRadius: "8px", backgroundColor: "#F7F7F7" }}
        >
          <Typography variant="h6" sx={{ marginBottom: "10px", color: "#3A506B" }}>
            Ticket Sales Overview
          </Typography>

          {/* Replaced line chart with TickPlacementBars */}
          <TickPlacementBars />
        </Box>
        {/* <Box
          marginBottom="30px"
          sx={{ padding: "15px", borderRadius: "8px", backgroundColor: "#F7F7F7" }}
        >
          <Typography variant="h6" sx={{ marginBottom: "10px", color: "#3A506B" }}>
            Ticket Sales Overview
          </Typography>
          <ReactApexChart
            options={{
              chart: { type: "line" },
              xaxis: { categories: ticketSales.labels },
              title: { text: "Ticket Sales", style: { fontSize: "18px", color: "#2E3B55" } },
            }}
            series={ticketSales.series}
            type="line"
            height={350}
          />
        </Box> */}


        
<div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Event Analytics</h2>
      <p className="text-sm text-gray-500 mb-4">
        Geo chart showcasing country-wise revenue distribution.
      </p>
      <div className="border-2 border-dashed border-gray-300 rounded h-96 flex items-center justify-center text-gray-400">
        <Chart
          chartType="GeoChart"
          data={data}
          options={options}
          width="100%"
          height="100%"
        />
      </div>
    </div>

        <Box
          marginBottom="30px"
          sx={{ padding: "15px", borderRadius: "8px", backgroundColor: "#F7F7F7" }}
        >
          <Typography variant="h6" sx={{ marginBottom: "10px", color: "#3A506B" }}>
            Media Upload
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button
                variant="contained"
                component="label"
                startIcon={<UploadFileIcon />}
                sx={{ backgroundColor: "#3A506B", color: "white" }}
              >
                Upload Image/Video
                <input
                  type="file"
                  hidden
                  accept="image/*,video/*"
                  multiple
                  onChange={handleMediaUpload}
                />
              </Button>
            </Grid>
            {isUploading && (
              <Grid item>
                <CircularProgress size={24} sx={{ color: "#3A506B" }} />
              </Grid>
            )}
          </Grid>
          <Box marginTop="20px">
            {mediaFiles.map((file, index) => (
              <Typography key={index} sx={{ color: "#2E3B55" }}>
                {file.name}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box
          marginBottom="30px"
          sx={{ padding: "15px", borderRadius: "8px", backgroundColor: "#F7F7F7" }}
        >
          <Typography variant="h6" sx={{ marginBottom: "10px", color: "#3A506B" }}>
            Event Details
          </Typography>
          <TextField
            label="Event Place"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            label="Event Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            label="Ticket Price"
            variant="outlined"
            fullWidth
            type="number"
          />
        </Box>

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
            Reset Fields
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventDashboard;
