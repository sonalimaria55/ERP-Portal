import { Card, CardContent, Typography, Box } from "@mui/material";

const StatCard = ({ title, value, change, icon }) => {
    return (
        <Card
            sx={{
                borderRadius: 8,
                p: 1,
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                bgcolor: "#FFFFFF",
                height: "100%",
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: "#666666",
                                fontSize: 16,
                            }}
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                mt: 1,
                            }}
                        >
                            {value}
                        </Typography>

                        <Typography
                            sx={{
                                color: "#2E7D32",
                                mt: 1,
                                fontWeight: 500,
                            }}
                        >
                            {change}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: 56,
                            height: 56,
                            borderRadius: "50%",
                            bgcolor: "#D5E3D8",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {icon}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default StatCard;