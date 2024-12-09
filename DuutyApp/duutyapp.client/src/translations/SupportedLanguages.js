const languages = [
  { code: "en", name: "English", order: 1 },
  { code: "tn", name: "Tamil", order: 2 },
  { code: "te", name: "Telugu", order: 4 },
  { code: "or", name: "Oriya", order: 5 },
  { code: "be", name: "Bengali", order: 6 },
  { code: "mal", name: "Malayalam", order: 7 },
  { code: "ka", name: "Kannada", order: 8 },
  { code: "hi", name: "Hindi", order: 3 },
];

export const supportedLanguages = languages.sort((a, b) => a.order - b.order);

export const getTranslations = async (langCode) => {
  const languageFile = await import(`./data/${langCode}.json`);
  return languageFile.default || languageFile;
};
