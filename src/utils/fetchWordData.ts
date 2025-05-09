import axios from "axios";

const WORD_API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const fetchWordData = async (word: string) => {
  try {
    const response = await axios.get(WORD_API + word);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
