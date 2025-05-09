import { Box, styled } from "@mui/material";

export const CenteredBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0.3),
  },
}));
