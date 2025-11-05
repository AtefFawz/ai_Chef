"use client";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <div className="container mx-auto px-8 w-full h-full text-[#213d34]">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          zIndex: 9999,
          fontSize: "42px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <CircularProgress sx={{ fontSize: "60px", fontWeight: "bold" }} />
        😆نتك زفت
      </Box>
    </div>
  );
}
