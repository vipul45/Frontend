import Axios from "axios";
import * as url from "config/api";
import * as logger from "utils/consoleLogger";

export const ArabictoEnglishModel = async () => {
  try {
    const { data } = await Axios.get(url.loadArabictoEnglishModel);
    return data.message;
  } catch (err) {
    logger.consoleLogError("ArabictoEnglishModel ", err);
  }
};

export const EnglishtoArabicModel = async () => {
  try {
    const { data } = await Axios.get(url.loadEnglishtoArabicModel);
    return data.message;
  } catch (err) {
    logger.consoleLogError("englishtoArabicModel ", err);
  }
};

export const HinditoEnglishModel = async () => {
  try {
    const { data } = await Axios.get(url.loadHinditoEnglishModel);
    return data.message;
  } catch (err) {
    logger.consoleLogError("HinditoEnglishModel ", err);
  }
};

export const EnglishtoHindiModel = async () => {
  try {
    const { data } = await Axios.get(url.loadEnglishtoHindiModel);
    return data.message;
  } catch (err) {
    logger.consoleLogError("EnglishtoHindiModel ", err);
  }
};
