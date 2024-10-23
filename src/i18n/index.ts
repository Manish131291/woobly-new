import {
  getStoredLanguageVersion,
  getStoredTranslations,
  getUserLanguage,
} from "../core-utils/language.util";
import { EN, HE, HI } from "./translate.i18n";

const lng = getUserLanguage();
const translations = getStoredTranslations();
let version = getStoredLanguageVersion();
const bundledTranslations = {
  en: EN,
  hi: HI,
  he: HE,
};
export const bundledVersions = Object.keys(bundledTranslations).reduce(
  (versionObj, lan) => {
    return { ...versionObj, [lan]: "1.0" };
  },
  {}
);

let resources;

if (translations) {
  resources = {
    [lng]: { translations: JSON.parse(translations) },
  };
  resources = Object.keys(bundledTranslations).reduce(
    (versionObj: any, lan: any) => {
      let updatedTranslation;
      if (lan !== lng) {
        updatedTranslation = { ...versionObj, [lan]: "1.0" };
      } else {
        updatedTranslation = versionObj;
      }
      return updatedTranslation;
    },
    resources
  );
} else {
  resources = bundledTranslations;
  version = "1.0";
}

export const translationVersion = version ?? "1.0";
