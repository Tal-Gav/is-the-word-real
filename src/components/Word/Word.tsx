import type { FunctionComponent } from "react";
import type { Status } from "../../constants";
import { CenteredBox } from "../styled";
import Letter from "./Letter";

interface WordProps {
  letters: Array<string>;
  wordState: Status;
}

const Word: FunctionComponent<WordProps> = ({ letters, wordState }) => {
  return (
    <CenteredBox>
      {Array.from({ length: 5 }, (_, index) => (
        <Letter
          key={index}
          letter={letters[index] || ""}
          wordState={wordState}
        />
      ))}
    </CenteredBox>
  );
};

export default Word;
