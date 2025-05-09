import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import type { FunctionComponent, ReactNode } from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  background: theme.palette.primary.main,
}));

interface KeyButtonProps {
  label: string | ReactNode;
  width?: string;
  height?: string;
  action: () => void;
}

const KeyButton: FunctionComponent<KeyButtonProps> = ({
  label,
  width,
  height,
  action,
}) => {
  const theme = useTheme();
  return (
    <Button sx={{ p: 0, minWidth: 0 }} onClick={action}>
      <StyledBox sx={{ width: width || "38px", height: height || "58px" }}>
        <Typography
          fontWeight={"bold"}
          color={theme.palette.secondary.main}
          display={"flex"}
        >
          {label}
        </Typography>
      </StyledBox>
    </Button>
  );
};

export default KeyButton;
