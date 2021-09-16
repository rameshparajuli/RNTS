import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { createContext, useContext, useState } from 'react';
import * as RNLocalize from 'react-native-localize';

import translations, { DEFAULT_LANGUAGE } from './translations';

const APP_LANGUAGE = 'appLanguage';

// ((text: string) => void) | undefined;

export const LocalizationContext = createContext({
  translations,
  setAppLanguage: () => {
    //
  },
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {
    //
  },
});

export enum ILanguage {
  en = 'en',
  np = 'np',
}

export const useLocalization = () => useContext(LocalizationContext);

export const LocalizationProvider = ({ children }: any) => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

  const setLanguage = (language: string) => {
    translations.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language);
  };

  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

    if (!currentLanguage) {
      let localeCode = DEFAULT_LANGUAGE;
      const supportedLocaleCodes = translations.getAvailableLanguages();
      const phoneLocaleCodes = RNLocalize.getLocales().map(
        locale => locale.languageCode,
      );
      phoneLocaleCodes.some(code => {
        if (supportedLocaleCodes.includes(code)) {
          localeCode = code;
          return true;
        }
      });
      setLanguage(localeCode);
    } else {
      setLanguage(currentLanguage);
    }
  };

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
