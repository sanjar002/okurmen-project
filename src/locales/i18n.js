import i18next from "i18next";
import { initReactI18next } from "react-i18next";
//kg VS ru
import kgJson from "./kg/kg.json";
import ruJson from "./ru/ru.json";

const resources = {
  kg: {
    translation: kgJson,
  },
  ru: {
    translation: ruJson,
  },
};

i18next.use(initReactI18next).init({
  lng: "kg",
  fallbackLng: "kg",
  debug: true,
  resources,
});

export default i18next;
