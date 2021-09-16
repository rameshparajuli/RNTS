import React from 'react';
import { View, StyleSheet } from 'react-native';

import { SPACING } from '~/constants';
import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';
import { ITheme } from '~/theme/theme.d';

import Text from '../Text';

const INFO = 'info';
const SUCCESS = 'success';
const ERROR = 'error';

interface IMessageView {
  message: string | undefined;
  type: typeof INFO | typeof SUCCESS | typeof ERROR;
}

const MessageView = ({ message, type = INFO }: IMessageView): JSX.Element => {
  const { theme } = useAppSelector(appTheme);
  return (
    <View style={styles.container}>
      <Text
        type={Text.TextType.BODY}
        style={[styles.text, { color: getTextColor(type, theme) }]}
      >
        {message}
      </Text>
    </View>
  );
};

const getTextColor = (type: string, theme: ITheme) => {
  switch (type) {
    case SUCCESS:
      return theme.success.default;
    case ERROR:
      return theme.danger.default;
    default:
      return theme.text.active;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    padding: SPACING.small,
  },
});

export default MessageView;
