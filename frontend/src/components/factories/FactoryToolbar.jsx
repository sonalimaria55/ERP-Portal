import React from "react";
import {
    Box,
    Button,
    TextField,
    InputAdornment,
    Tooltip,
    IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";

const FactoryToolbar = ({
    search,
    setSearch,
    onAdd,
    onRefresh,
}) => {
    return (
        <Box
            sx={{
                mb: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
            }}
        >
            <TextField
                size="small"
                placeholder="Search factories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{
                    width: 350,
                    bgcolor: "#fff",
                }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    },
                }}
            />

            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                }}
            >
                <Tooltip title="Refresh">
                    <IconButton onClick={onRefresh}>
                        <RefreshIcon />
                    </IconButton>
                </Tooltip>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={onAdd}
                    sx={{
                        bgcolor: "#D5E3D8",
                        color: "#222",
                        fontWeight: 600,
                        px: 3,
                        "&:hover": {
                            bgcolor: "#C7D9CB",
                        },
                    }}
                >
                    Add Factory
                </Button>
            </Box>
        </Box>
    );
};

export default FactoryToolbar;