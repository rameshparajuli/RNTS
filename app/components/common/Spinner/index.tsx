import React from 'react';
import { ActivityIndicator, ViewStyle } from 'react-native';

import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';

interface ISpinner {
  size: 'large' | 'small';
  color?: string;
  style?: ViewStyle;
}

const Spinner = ({
  size = 'large',
  color = '',
  style = {},
}: ISpinner): JSX.Element => {
  const { theme } = useAppSelector(appTheme);
  return (
    <ActivityIndicator
      style={style}
      size={size}
      color={color || theme.brandColor.primary}
    />
  );
};

export default Spinner;
