import { DependencyList, useMemo } from 'react';
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';
import { ITheme } from '~/theme/theme.d';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const useStyles = <T extends NamedStyles<T>>(
  create: (theme: ITheme) => T,
  deps: DependencyList = [],
): T => {
  const { theme } = useAppSelector(appTheme);
  return useMemo(() => StyleSheet.create(create(theme)), [...deps, theme]);
};
