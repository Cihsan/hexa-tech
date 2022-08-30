import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from './Pages/Locals/English.json'
import bangladesh from './Pages/Locals/Bangladesh.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: english
            },
            bd: {
                translation: bangladesh
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
