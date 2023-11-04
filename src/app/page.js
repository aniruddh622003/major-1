import Footer from "@/components/Footer";
import { Box, Button, Typography } from "@mui/material";
import { NextLink } from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        maxHeight: "100vh",
        minHeight: "calc(100vh - 70px)",
        background:
          "radial-gradient(circle,rgba(104, 228, 152, 0.4),rgba(255, 255, 255, 1))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{ textAlign: "center", paddingTop: "10rem" }}
        >
          ZENiTH
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          Drag n Drop Interactive ML Model Maker
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            paddingBottom: "14rem",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            component={NextLink}
            href="/flow/upload-dataset"
            // sx={{ marginRight: "1rem" }}
          >
            Get Started
          </Button>
          This is broken code.
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
