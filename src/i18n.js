import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

i18n.use(initReactI18next).init({
    resources: {
    en: {
        translations: {
            'Sign up': 'Sign up',
            'Passwords do not match': 'Passwords do not match',
        }
    },
    tr: {
        translations: {
            'Sign up': 'Kaydol',
            'Passwords do not match': 'Sifreler uyusmuyor',
        }
    },
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    },
    react: {
    wait:true
    }
});

export default i18n;