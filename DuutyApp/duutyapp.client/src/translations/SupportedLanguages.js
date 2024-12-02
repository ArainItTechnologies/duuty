export const supportedLanguages = [
    { code: "en", name: "English" },
    { code: "tn", name: "Tamil" },
    { code: "te", name: "Telugu" },
    { code: "hi", name: "Hindi" }
  ];

export const getTranslations = async (langCode) => {
    const languageFile = await import(`./data/${langCode}.json`);
    return languageFile.default || languageFile;
  };