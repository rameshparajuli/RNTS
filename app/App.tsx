import { PersistGate } from 'redux-persist/integration/react';

import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { ToastNotification } from '~/components/common';
import { LocalizationProvider } from '~/locale/LocalizationContext';
import RootNavigator from '~/navigator';
import store, { persistor } from '~/store/store';

import { useAppSelector } from './store/hooks';
import { toast } from './store/toast/toastSlice';
import { appTheme } from './store/theme/themeSlice';
import { StatusBar, View } from 'react-native';

const MainApp = () => {
  const { showToast } = useAppSelector(toast);
  const { theme } = useAppSelector(appTheme)

  return (
    <View style={{flex:1}}>
      <StatusBar
        barStyle={theme.appbar.barStyle}
        backgroundColor={theme.appbar.statusBarColor}
        animated
      />
      <RootNavigator />
      {showToast && <ToastNotification />}
    </View>
  );
};

export default function App(): JSX.Element {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationProvider>
          <MainApp />
        </LocalizationProvider>
      </PersistGate>
    </StoreProvider>
  );
}
