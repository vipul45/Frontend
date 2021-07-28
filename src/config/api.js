//API CONSTANTS

// const url = "http://103.46.239.133:8082/";
const url = "http://18.134.179.41:8080/";

// const url = "http://35.176.100.178/";

const API_CONFIG = {
  baseUrl: url,
  englishToArabic: url + "translation_bot/English_to_arabic/",
  englishtoHindi: url + "translation_bot/English_to_hindi/",
  hinditoEnglish: url + "translation_bot/Hindi_to_english/",
  arabicToEnglish: url + "translation_bot/Arabic_to_english/",
  spanishToEnglish: url + "translation_bot/Spanish_to_english/",
  englishToSpanish: url + "translation_bot/English_to_spanish/",
  detectLanguage: url + "translation_bot/Detect_language/",
  transliteration: url + "translation_bot/Transliteration/",
  // loadEnglishtoArabicModel:
  //   url + "translation_bot/load_english_to_arabic_model/",
  // loadArabictoEnglishModel:
  //   url + "translation_bot/load_arabic_to_english_model/",
  // loadHinditoEnglishModel: url + "translation_bot/load_hindi_to_english_model/",
  // loadEnglishtoHindiModel: url + "translation_bot/load_english_to_hindi_model/",
};

export const {
  baseUrl,
  englishToArabic,
  arabicToEnglish,
  detectLanguage,
  hinditoEnglish,
  englishtoHindi,
  spanishToEnglish,
  englishToSpanish,
  loadEnglishtoArabicModel,
  loadArabictoEnglishModel,
  loadHinditoEnglishModel,
  loadEnglishtoHindiModel,
  transliteration,
} = API_CONFIG;
