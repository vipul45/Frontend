import axios from "axios";
import * as url from "config/api";
import * as logger from "utils/consoleLogger";
export const englishToArabicTranslation = async (payload) => {
  try {
    const { data } = await axios.post(url.englishToArabic, payload);
    const translatedText = data.translation_text;
    return translatedText;
  } catch (error) {
    logger.consoleLogError("englishToArabicTranslation Api", error);
  }
};

export const arabicToEnglishTranslation = async (payload) => {
  try {
    const { data } = await axios.post(url.arabicToEnglish, payload);
    const translatedText = data.translation_text;
    return translatedText;
  } catch (error) {
    logger.consoleLogError("arabicToEnglishTranslation Api", error);
  }
};

export const hinditoEnglishTranslation = async (payload) => {
  try {
    const { data } = await axios.post(url.hinditoEnglish, payload);
    const translatedText = data.translation_text;
    return translatedText;
  } catch (error) {
    logger.consoleLogError("arabicToEnglishTranslation Api", error);
  }
};

export const englishtoHindiTranslation = async (payload) => {
  try {
    const { data } = await axios.post(url.englishtoHindi, payload);
    const translatedText = data.translation_text;
    return translatedText;
  } catch (error) {
    logger.consoleLogError("arabicToEnglishTranslation Api", error);
  }
};

export const spanishToEnglishTranslation = async (payload) => {
  try {
    const { data } = await axios.post(url.spanishToEnglish, payload);
    const translatedText = data.translation_text;
    return translatedText;
  } catch (error) {
    logger.consoleLogError("arabicToEnglishTranslation Api", error);
  }
};

export const englishToSpanishTranslation = async (payload) => {
  try {
    const { data } = await axios.post(url.englishToSpanish, payload);
    const translatedText = data.translation_text;
    return translatedText;
  } catch (error) {
    logger.consoleLogError("arabicToEnglishTranslation Api", error);
  }
};
