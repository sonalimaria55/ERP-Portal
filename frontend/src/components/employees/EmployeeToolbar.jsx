import { useState } from "react";

import {
  Box,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

const EmployeeToolbar = ({
  onAdd,
  onSearch,
  status,
  onStatusChange,
}) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        mb: 3,
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          flex: 1,
        }}
      >
        <TextField
          size="small"
          placeholder="Search Employee..."
          value={keyword}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <SearchIcon
                sx={{
                  mr: 1,
                  color: "text.secondary",
                }}
              />
            ),
          }}
          sx={{
            minWidth: 280,
          }}
        />

        <TextField
          select
          size="small"
          label="Status"
          value={status || ""}
          onChange={(e) =>
            onStatusChange?.(e.target.value)
          }
          sx={{
            width: 180,
          }}
        >
          <MenuItem value="">
            All
          </MenuItem>

          <MenuItem value="Active">
            Active
          </MenuItem>

          <MenuItem value="Inactive">
            Inactive
          </MenuItem>
        </TextField>
      </Box>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAdd}
      >
        Add Employee
      </Button>
    </Box>
  );
};

export default EmployeeToolbar;