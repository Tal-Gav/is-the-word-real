import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import {
  APPEND_LETTER_ACTION_NAME,
  CHECK_WORD_ACTION_NAME,
  CLEAR_WORD_ACTION_NAME,
  REMOVE_LETTER_ACTION_NAME,
} from "../../constants";
import { actionListener } from "../../utils/MyActionListener";
import { CenteredBox } from "../styled";
import KeyButton from "./KeyButton";
const Keyboard = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const firstLettersRow = "Q W E R T Y U I O P".split(" ");
  const secondLettersRow = "A S D F G H J K L".split(" ");
  const thirdLettersRow = "Z X C V B N M".split(" ");
  const Enter = "ENTER";
  const BackSpace = () => <BackspaceOutlinedIcon />;
  const Clear = () => (
    <>
      CLEAR
      <DeleteOutlineOutlinedIcon />
    </>
  );

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={isXs ? 0.3 : 1}
    >
      <CenteredBox>
        {firstLettersRow.map((letter) => (
          <KeyButton
            key={letter}
            label={letter}
            action={() =>
              actionListener.emit(APPEND_LETTER_ACTION_NAME, letter)
            }
          />
        ))}
      </CenteredBox>
      <CenteredBox>
        {secondLettersRow.map((letter) => (
          <KeyButton
            key={letter}
            label={letter}
            action={() =>
              actionListener.emit(APPEND_LETTER_ACTION_NAME, letter)
            }
          />
        ))}
      </CenteredBox>
      <CenteredBox>
        <KeyButton
          key={Enter}
          label={Enter}
          width="66px"
          action={() => actionListener.emit(CHECK_WORD_ACTION_NAME, "")}
        />
        {thirdLettersRow.map((letter) => (
          <KeyButton
            key={letter}
            label={letter}
            action={() =>
              actionListener.emit(APPEND_LETTER_ACTION_NAME, letter)
            }
          />
        ))}
        <KeyButton
          key={"BACKSPACE"}
          label={<BackSpace />}
          width="60px"
          action={() => actionListener.emit(REMOVE_LETTER_ACTION_NAME, "")}
        />
      </CenteredBox>
      <Box pt={2} />
      <KeyButton
        key={"CLEAR"}
        label={<Clear />}
        width="100px"
        height="45px"
        action={() => actionListener.emit(CLEAR_WORD_ACTION_NAME, "")}
      />
    </Box>
  );
};

export default Keyboard;
