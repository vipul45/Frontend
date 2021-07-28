import * as url from "config/api";
import * as logger from "utils/consoleLogger";
import axios from "axios";

export const hindiTransliteration = async (payload) => {
  try {
    const { data } = await axios.post(url.transliteration, payload);
    const translateText = data["Transliterate Text"];
    logger.consoleLogData("transliterator:-", translateText);
    return translateText;
  } catch (error) {
    logger.consoleLogError("arabicToEnglishTranslation Api", error);
  }
};
