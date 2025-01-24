import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TranslationContext } from "./TranslationContext";
import { getTranslations } from "./SupportedLanguages";

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); 
  const [translations, setTranslations] = useState({});
  const [languageLoading, setLanguageLoading] = useState(true);
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      setLanguageLoading(true);
      const loadedTranslations = await getTranslations(language);
      setTranslations(loadedTranslations);
      setLanguageLoading(false);
    };

    loadTranslations();
  }, [language]);

  // Translate function
  const t = (key, placeholders = {}) => {
    const keys = key.split(".");
    let translation = keys.reduce((obj, k) => obj?.[k], translations) || key;

    Object.keys(placeholders).forEach((placeholder) => {
      translation = translation.replace(
        `{{${placeholder}}}`,
        placeholders[placeholder]
      );
    });
    return translation;
  };

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage, languageLoading, isLanguageSelected, setIsLanguageSelected }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Add PropTypes to validate the props
TranslationProvider.propTypes = {
  children: PropTypes.node.isRequired, // children can be any valid React node
};
