import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Keyboard from "../../components/Keyboard";
import Title from "../../components/Title";
import Word from "../../components/Word";
import {
  APPEND_LETTER_ACTION_NAME,
  CHECK_WORD_ACTION_NAME,
  CLEAR_WORD_ACTION_NAME,
  REMOVE_LETTER_ACTION_NAME,
  Status,
} from "../../constants";
import { fetchWordData } from "../../utils/fetchWordData";
import { actionListener } from "../../utils/MyActionListener";

const MAX_LENGTH = 5;
const NO_WORDS_FOUND = "No Definitions Found";

const Home = () => {
  const [letters, setLetters] = useState<Array<string>>([]);
  const [wordState, setWordState] = useState<Status>(Status.Idle);

  const appendLetter = (letter: string) => {
    if (letters.length < MAX_LENGTH) {
      setLetters((prev) => [...prev, letter]);
    }
  };

  const removeLetter = () => {
    setLetters((prev) => prev.slice(0, -1));
    setWordState(Status.Idle);
  };

  const checkWord = async () => {
    if (letters.length === MAX_LENGTH) {
      const word = letters.join("");
      const result = await fetchWordData(word);

      if (result.status === 404 && result.data.title === NO_WORDS_FOUND) {
        setWordState(Status.Error);
        toast.error("That’s not a real word.");
      } else {
        setWordState(Status.Success);
        toast.success("That's a real word!");
      }
    }
  };

  const clearWord = () => {
    setLetters([]);
    setWordState(Status.Idle);
  };

  useEffect(() => {
    actionListener.registerListener(APPEND_LETTER_ACTION_NAME, appendLetter);
    actionListener.registerListener(REMOVE_LETTER_ACTION_NAME, removeLetter);
    actionListener.registerListener(CHECK_WORD_ACTION_NAME, checkWord);
    actionListener.registerListener(CLEAR_WORD_ACTION_NAME, clearWord);

    return () => {
      actionListener.removeListener(APPEND_LETTER_ACTION_NAME);
      actionListener.removeListener(REMOVE_LETTER_ACTION_NAME);
      actionListener.removeListener(CHECK_WORD_ACTION_NAME);
    };
  }, [letters]);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={10}
      p={2}
    >
      <Title />
      <Word letters={letters} wordState={wordState} />
      <Keyboard />
    </Box>
  );
};

export default Home;
