import React, { useState } from "react";
import "styles/inputForm.css";
import { detectLanguage } from "api/detectLanguage";
import * as translator from "api/translation";
import * as logger from "utils/consoleLogger";
import languages from "constants/translationData";
import Loader from "components/Loader";
import * as transliteration from "api/transliteration";

const InputForm = () => {
  const [languageOne, setlanguageOne] = useState("");
  const [loading, setloading] = useState({ state: false, text: "" });
  const [languageTwo, setlanguageTwo] = useState("");
  const [itemInput, setItemInput] = useState("");
  //const [isSubmitClicked, setisSubmitClicked] = useState(false);
  const [translationResult, setTranslationResult] = useState("Translation");
  //const [isTransliterationChecked, setisTransliterationChecked] =
   // useState(false);
  const translateLanguageAvailable = languages.filter(
    (item) => item.language === languageOne
  );

  const languageTranslator = async (
    languagetoTranslate,
    value,
    translator_name
  ) => {
    try {
      setloading({ state: true, text: translator_name + "  Loading. . ." });
      const fetchedData = await languagetoTranslate({ input: value });
      setloading({ state: false, text: translator_name + "  Loaded!" });
      logger.consoleLogData(translator_name, fetchedData);
      if (value === "") {
        return setTranslationResult("");
      }
      return setTranslationResult(fetchedData);
    } catch (error) {
      logger.consoleLogError(translator_name, error);
      setloading({ state: false, text: translator_name + "  Loaded!" });
    }
  };

  const detectLanguageApi = async (value) => {
    try {
      const fetchedLanguage = await detectLanguage({ input: value });
      logger.consoleLogData("detectlanguageApi", fetchedLanguage);
      switch (fetchedLanguage) {
        case "English":
          setlanguageOne("English");
          break;
        case "Arabic":
          setlanguageOne("Arabic");
          break;
        case "Hindi":
          setlanguageOne("Hindi");
          break;
        case "Spanish":
          setlanguageOne("Spanish");
          break;
        default:
          setlanguageOne("");
          setlanguageTwo("");
          break;
      }
    } catch (error) {
      logger.consoleLogError("detectlanguageApi", error);
    }
  };
  const handleChange = (value) => {
    setItemInput(value);
    logger.consoleLogData("language one", languageOne);
    if (languageOne === "" || languageTwo === "") {
      detectLanguageApi(value);
      return;
    }
    // if (isTransliterationChecked) {
    //   transliterator(value, languageOne);
    // } else {
     // if (isSubmitClicked) {
      //  translateLanguageHandler(value);
     // }
    // }
  };


transliterator(itemInput, languageOne)
  const transliterator = async (value, language) => {
    try {
      const { data } = await transliteration.hindiTransliteration({
        input: value,
        language,
      });
      logger.consoleLogData("trasnliterator ", data);
    // translateLanguageHandler(data);
    } catch (error) {
      logger.consoleLogError("transliteration error ", error);
    }
  };

  const translateLanguageHandler = (value) => {
    logger.consoleLogData("languageTwo", languageTwo);
    if (languageOne === "English" && languageTwo === "Arabic") {
      languageTranslator(
        translator.englishToArabicTranslation,
        value,
        "english to arabic translation"
      );
    }
    if (languageOne === "Arabic" && languageTwo === "English") {
      languageTranslator(
        translator.arabicToEnglishTranslation,
        value,
        "arabic to English translation"
      );
    }
    if (languageOne === "Hindi" && languageTwo === "English") {
      languageTranslator(
        translator.hinditoEnglishTranslation,
        value,
        "hindi to english translation"
      );
    }
    if (languageOne === "English" && languageTwo === "Hindi") {
      languageTranslator(
        translator.englishtoHindiTranslation,
        value,
        "english to Hindi translation"
      );
    }
    if (languageOne === "English" && languageTwo === "Spanish") {
      languageTranslator(
        translator.englishToSpanishTranslation,
        value,
        "english to Spanish Translation"
      );
    }

    if (languageOne === "Spanish" && languageTwo === "English") {
      languageTranslator(
        translator.spanishToEnglishTranslation,
        value,
        "Spanish to English Translation"
      );
    }
  };

 // useEffect(() => {
 //   if (isSubmitClicked) {
   //   translateLanguageHandler(itemInput);
   // }
    // eslint-disable-next-line
//  }, [languageTwo]);

 // useEffect(() => {
  //  if (isSubmitClicked) {
    //  translateLanguageHandler(itemInput);
   // }
    // eslint-disable-next-line
//  }, [isSubmitClicked]);
  const handleSubmit = () => {
   translateLanguageHandler(itemInput);
  }

  const onLanguageChange = () => {
    setlanguageOne(languageTwo);
    setlanguageTwo(languageOne);
    setItemInput("");
    setTranslationResult("Translation");
  };
 // const handleTransliteration = () =>
 //   setisTransliterationChecked(!isTransliterationChecked);

  return (
    <>
      <header className="inputForm__header">
        <h1 className="inputForm__heading ms-4">Translater</h1>
      </header>
      <form className="inputForm__container">
        {/* <button
          className="inputForm__transliteration"
          type="button"
          onClick={handleTransliteration}
        >
          <input type="checkbox" defaultChecked={isTransliterationChecked} />{" "}
          Transliteration
        </button> */}
        {/* <button className="inputForm__transliteration">Detect Language</button> */}
        <div className="inputForm__div">
          <div className="inputForm__input_container">
            <div className="inputForm__language_container">
              <button className="inputForm__detect-btn">detect language</button>
              <select
                name="language-1"
                id="language-1"
                className="inputForm__input"
                value={languageOne}
                onChange={(e) => setlanguageOne(e.target.value)}
              >
                <option value="">Select Language</option>
                {languages.map((item, index) => (
                  <option value={item.language} key={index}>
                    {item.language}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              className="inputForm_textArea"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Enter text here"
              onChange={(e) => handleChange(e.target.value)}
              value={itemInput}
            ></textarea>
          </div>
          <div className="exchange-icon">
            <i
              className="fa fa-exchange fa-2x"
              aria-hidden="true"
              onClick={onLanguageChange}
            ></i>
          </div>

          <div className="inputForm__input_container">
            {loading.state ? (
              <Loader text={loading.text} />
            ) : (
              <>
                <div className="inputForm__language_container">
                  <select
                    name="language-2"
                    id="language-2"
                    className="inputForm__input inputForm__disabled"
                    value={languageTwo}
                    onChange={(e) => setlanguageTwo(e.target.value)}
                  >
                    <option value="">Translate Language</option>
                    {languageOne === ""
                      ? languages.map((item, index) => (
                          <option value={item.language} key={index}>
                            {item.language}
                          </option>
                        ))
                      : translateLanguageAvailable[0].translate.map(
                          (data, index) => (
                            <option value={data} key={index}>
                              {data}
                            </option>
                          )
                        )}
                  </select>
                </div>
                <textarea
                  className="inputForm_textArea inputForm__disabled"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  value={translationResult}
                  aria-label="Disabled input example"
                  disabled
                  readOnly
                ></textarea> 
              </>
            )}
          </div>
        </div>
          <button type="button" 
          className="inputForm__detect-btn inputForm__translate-btn"  
        //  onClick={()=>setisSubmitClicked(true)} 
            onClick={handleSubmit}
            >Translate</button>
      </form>
    </>
  );
};

export default InputForm;
