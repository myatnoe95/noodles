import React from "react";
//UI Components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "100px",
        backgroundColor: "#313233",
        width: `100%`,
        position: "absolute",
        overflow: "hidden",
        bottom: "-500px",
        margin: 0,
        padding: 0,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{
            my: 2,
            color: "#F6F7F8",
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
          }}
        >
          Privacy Statement | Terms and Conditions | Imprint
        </Typography>
        <Typography
          variant="h6"
          sx={{
            my: 2,
            color: "#AAABAC",
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
          }}
        >
          @2023 Taglinehere Thailand Co., Ltd.
        </Typography>
      </Box>
    </Box>
  );
}
