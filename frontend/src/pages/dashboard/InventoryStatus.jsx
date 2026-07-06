import React from "react";
import { Paper, Typography, Box } from "@mui/material";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Available",
    value: 68,
  },
  {
    name: "Reserved",
    value: 22,
  },
  {
    name: "Low Stock",
    value: 10,
  },
];

const COLORS = [
  "#D5E3D8",
  "#8FA89A",
  "#E6C9A8",
];

const InventoryStatus = () => {
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
      <Typography
        sx={{
          fontSize: 14,
          color: "#666",
          textTransform: "uppercase",
          letterSpacing: 1,
          mb: 3,
        }}
      >
        Inventory Status
      </Typography>

      <ResponsiveContainer width="100%" height="75%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <Box mt={2}>
        {data.map((item, index) => (
          <Box
            key={item.name}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography>{item.name}</Typography>

            <Typography fontWeight={600}>
              {item.value}%
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default InventoryStatus;