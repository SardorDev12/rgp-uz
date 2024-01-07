import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import uzJSON from "./locale/uz.json";
import ruJSON from "./locale/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    uz: { ...uzJSON },
    ru: { ...ruJSON },
  },
  lng: "uz",
});
