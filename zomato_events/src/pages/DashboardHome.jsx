import React from "react";
import { Chart } from "react-google-charts";
import { PieChart } from "@mui/x-charts/PieChart";
import OrdersTable from '../dashboard/OrdersTable';

// Sample data for Pie Chart
const eventStatuses = [
  { label: "Live", value: 45 },
  { label: "Sold Out", value: 30 },
  { label: "Cancelled", value: 15 },
  { label: "Upcoming", value: 10 },
];

// Formatter for Pie Chart values
const valueFormatter = (value) => `${value}%`;

export default function DashboardHome() {
  const stats = [
    { label: "Today's Stats", value: 78, bg: "bg-pink-600" },
    { label: "Approved", value: 20, bg: "bg-blue-600" },
    { label: "Pending", value: 112, bg: "bg-green-600" },
    { label: "Rejected", value: 9, bg: "bg-yellow-600" },
  ];

  const data = [
    ["Country", "Revenue"],
    ["India", 2000],
    ["United States", 3000],
    ["China", 4000],
    ["Germany", 2500],
    ["Brazil", 1500],
    ["France", 1800],
    ["Japan", 2200],
    ["Australia", 1700],
    ["Canada", 2100],
  ];

  const options = {
    region: "world",
    colorAxis: { colors: ["#e0f7fa", "#6a5acd"] },
    backgroundColor: "#f4f4f4",
    datalessRegionColor: "#f0f0f0",
    defaultColor: "#cccccc",
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`flex items-center justify-between p-4 rounded shadow text-white ${stat.bg}`}
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium opacity-90">
                {stat.label}
              </span>
              <span className="text-xl font-bold mt-1">{stat.value}</span>
            </div>
            <svg
              className="w-8 h-8 opacity-75"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5l-7 7 7 7M5 12h14"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Geo Chart */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Revenue Distribution
          </h2>
          <Chart
            chartType="GeoChart"
            data={data}
            options={options}
            width="100%"
            height="100%"
          />
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Event Status Overview
          </h2>
          <PieChart
            series={[
              {
                data: eventStatuses,
                highlightScope: { fade: "global", highlight: "item" },
                faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                valueFormatter,
              },
            ]}
            height={300}
          />
        </div>
        
       
      </div>
      <OrdersTable>
          {/* Your OrdersTable content here */}
        </OrdersTable>
      
    </div>
  );
}
