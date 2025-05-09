import { Box, Typography, useTheme } from "@mui/material";
import { Emoji } from "react-apple-emojis";

const Title = () => {
  const theme = useTheme();
  return (
    <Typography
      fontFamily={"Segoe UI"}
      fontWeight={"bold"}
      letterSpacing={2}
      textAlign={"center"}
      variant="h2"
      color={theme.palette.secondary.main}
    >
      Is the Word Real?
      <Box component={"span"} mr={1} style={{ verticalAlign: "middle" }}>
        <Emoji name="thinking-face" width={60} />
      </Box>
    </Typography>
  );
};

export default Title;
