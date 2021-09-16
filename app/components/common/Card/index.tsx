import React from 'react';
import { View, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native';

import { DIMENS } from '~/constants';
import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';

export enum CartType {
  OUTLINE = 'outline',
  CLEAR = 'clear',
  SHADOW = 'shadow',
}

interface ICard {
  type: CartType;
  style: ViewStyle;
  onPress: () => void;
  children: React.ReactChildren;
}

const Card = ({
  type = CartType.OUTLINE,
  style,
  onPress,
  children,
}: ICard): JSX.Element => {
  const { theme } = useAppSelector(appTheme);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View
        style={StyleSheet.flatten([
          styles.container,
          {
            borderColor: '#d3d3d3',
            backgroundColor: theme.background.bg01,
            borderWidth: type === CartType.OUTLINE ? 1 : 0,
          },
          style,
        ])}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex: 1,
    borderRadius: DIMENS.borderRadius,
  },
};

export default Card;
