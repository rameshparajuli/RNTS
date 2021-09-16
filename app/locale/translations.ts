import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';
import np from './i18n/np';
import en from './i18n/en';

const translations = {
  en: en,
  np: np,
};

export default new LocalizedStrings(translations);
