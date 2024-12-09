const languages = [
  { code: "en", name: "English", order: 1 },
  { code: "hi", name: "Hindi", order: 2 },
  { code: "or", name: "Oriya", order: 3 },
  { code: "be", name: "Bengali", order: 4 },
  { code: "tn", name: "Tamil", order: 5 },
  { code: "te", name: "Telugu", order: 6 },
  { code: "ml", name: "Malayalam", order: 7 },
  { code: "ka", name: "Kannada", order: 8 },
];

export const supportedLanguages = languages.sort((a, b) => a.order - b.order);

export const getTranslations = async (langCode) => {
  const languageFile = await import(`./data/${langCode}.json`);
  return languageFile.default || languageFile;
};
