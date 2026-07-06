import React from "react";
import {
  Paper,
  Typography,
  Box,
} from "@mui/material";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", sales: 380000 },
  { month: "Feb", sales: 420000 },
  { month: "Mar", sales: 520000 },
  { month: "Apr", sales: 610000 },
  { month: "May", sales: 580000 },
  { month: "Jun", sales: 720000 },
  { month: "Jul", sales: 810000 },
];

const RevenueChart = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 6,
        border: "1px solid #ECECEC",
        height: 420,
      }}
    >
      <Box mb={4}>
        <Typography
          sx={{
            fontSize: 14,
            color: "#666",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Revenue Overview
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: 1,
            fontWeight: 700,
            color: "#1E1E1E",
          }}
        >
          ₹48,20,000
        </Typography>
      </Box>

      <ResponsiveContainer
        width="100%"
        height="82%"
      >
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="sales"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#D5E3D8"
                stopOpacity={0.8}
              />

              <stop
                offset="100%"
                stopColor="#D5E3D8"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#ECECEC"
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="sales"
            stroke="#1E1E1E"
            strokeWidth={3}
            fill="url(#sales)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default RevenueChart;