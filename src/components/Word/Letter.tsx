import { Box, styled, Typography, useTheme } from "@mui/material";

import type { FunctionComponent } from "react";
import { Status } from "../../constants";

interface StyledBoxProps {
  wordState: Status;
}

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "wordState",
})<StyledBoxProps>(({ theme, wordState }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  height: "100px",
  width: "100px",
  border: `4px solid ${wordState === Status.Success ? "#16C47F" : wordState === Status.Error ? "#E50046" : wordState === Status.Idle && theme.palette.primary.main}`,
}));

interface LetterProps {
  letter: string;
  wordState: Status;
}

const Letter: FunctionComponent<LetterProps> = ({ letter, wordState }) => {
  const theme = useTheme();

  return (
    <StyledBox wordState={wordState}>
      <Typography
        fontWeight={"bold"}
        color={theme.palette.secondary.main}
        display={"flex"}
        fontSize={"2.5rem"}
      >
        {letter}
      </Typography>
    </StyledBox>
  );
};

export default Letter;
