
import React from 'react';
import {
  ScrollView,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';

import { SPACING } from '~/constants/index';
import LoadingView from '../LoadingView';
import MessageView from '../MessageView';
import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

enum STATUS {
  DEFAULT = 'NOT_STARTED',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
interface IGenericTemplate {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  backgroundColor?: string;
  scrollable?: boolean;
  status?: STATUS;
  errorMessage?: string;
  padding?: boolean;
  style?: StyleProp<ViewStyle>;
}

const GenericTemplate = ({
  children,
  header,
  footer = <></>,
  scrollable,
  status = STATUS.SUCCESS,
  errorMessage = '',
  padding,
  style = {},
}: IGenericTemplate): JSX.Element => {
  const {theme } = useAppSelector(appTheme)
  const ViewGroup = scrollable ? ScrollView : View;

  if (status === STATUS.ERROR) {
    return <MessageView type="error" message={errorMessage} />;
  }

  if (status === STATUS.DEFAULT || status === STATUS.LOADING) {
    return <LoadingView backgroundColor={'#fff'} size="large" />;
  }

  return (
    <SafeAreaView style={{ backgroundColor: theme.background.bg01, flex: 1 }}>
      {header}
      <ViewGroup
        style={[
          styles.content,
          { paddingHorizontal: padding ? SPACING.large : 0 },
          style,
        ]}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ViewGroup>
      {footer}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

GenericTemplate.Status = STATUS;

export default GenericTemplate;
