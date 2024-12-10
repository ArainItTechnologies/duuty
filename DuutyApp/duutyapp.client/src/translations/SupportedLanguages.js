const languages = [
  { code: "en", name: "English", order: 1 },
  { code: "hi", name: "हिंदी", order: 2 },
  { code: "or", name: "ଓଡିଆ", order: 3 },
  { code: "be", name: "বাংলা", order: 4 },
  { code: "tn", name: "தமிழ்", order: 5 },
  { code: "te", name: "తెలుగు", order: 6 },
  { code: "ml", name: "മലയാളം", order: 7 },
  { code: "ka", name: "ಕನ್ನಡ", order: 8 },
];

export const supportedLanguages = languages.sort((a, b) => a.order - b.order);

export const getTranslations = async (langCode) => {
  const languageFile = await import(`./data/${langCode}.json`);
  return languageFile.default || languageFile;
};
