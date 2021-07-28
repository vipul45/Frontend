import * as url from "config/api";
import * as logger from "utils/consoleLogger";
import Axios from "axios";
export const detectLanguage = async (body) => {
  try {
    const { data } = await Axios.post(url.detectLanguage, body);
    return data.language_detected;
  } catch (error) {
    logger.consoleLogError(
      "detectlanguage.js > detectLanguage Api error",
      error
    );
  }
};
