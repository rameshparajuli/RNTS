import React from 'react';
import { Text as RNText, StyleSheet, TextStyle, StyleProp } from 'react-native';

import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';
import { typographyStyles, ITypographyStylesObject } from '~/styles/typography';
import { ITheme } from '~/theme/theme.d';

import { TextType } from './Text.d';

interface ITextProps {
  type?: TextType;
  bold?: boolean;
  invert?: boolean;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const Text = ({
  type = TextType.BODY,
  bold,
  invert,
  style,
  ...props
}: ITextProps): JSX.Element => {
  const { theme } = useAppSelector(appTheme);
  return (
    <RNText
      style={StyleSheet.flatten([
        getTextStyle(type, bold as boolean, theme) as TextStyle,
        invert && { color: '#fff' },
        style && style,
      ])}
      {...props}
    />
  );
};

const getTextStyle = (
  type: TextType,
  bold: boolean,
  theme: ITheme,
): ITypographyStylesObject => {
  const selectedProperty = typographyStyles[type];

  if (typeof selectedProperty === 'function') {
    return selectedProperty(theme, bold);
  } else {
    return selectedProperty;
  }
};

Text.TextType = TextType;

export default Text;
