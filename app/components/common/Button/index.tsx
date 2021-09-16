import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

import { DIMENS, SPACING } from '~/constants';
import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';
import { typographyStyles } from '~/styles/typography';

import Text from '../Text';

export enum ButtonType {
  SOLID = 'solid',
  OUTLINE = 'outline',
  CLEAR = 'clear',
}

const TouchReceptor = TouchableOpacity;
interface IButton {
  title: string;
  type?: ButtonType;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftIcon?: React.ReactChild;
  rightIcon?: React.ReactChild;
  rounded?: boolean;
  primary?: boolean;
}

const Button = ({
  type = ButtonType.SOLID,
  rounded = true,
  primary = true,
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
  containerStyle,
  textStyle,
  leftIcon,
  rightIcon,
}: IButton): JSX.Element => {
  const { theme } = useAppSelector(appTheme);

  const buttonStyle = {
    backgroundColor:
      type === ButtonType.SOLID
        ? primary
          ? theme.brandColor.primary
          : theme.brandColor.secondary
        : 'transparent',
    borderWidth: type === ButtonType.OUTLINE ? StyleSheet.hairlineWidth : 0,
    borderColor: primary
      ? theme.brandColor.primary
      : theme.brandColor.secondary,
    borderRadius: rounded ? DIMENS.borderRadius : 0,
  };

  const buttonDisableStyle = {
    backgroundColor: type === ButtonType.SOLID ? '#d3d3d3' : 'transparent',
    borderColor: '#d',
  };

  const titleStyle = {
    color:
      type === ButtonType.SOLID || ButtonType.CLEAR
        ? '#FFF'
        : theme.brandColor.secondary,
  };

  const textDisableStyle = {
    color: '#d3d3d3',
  };

  return (
    <View style={[containerStyle && containerStyle]}>
      <TouchReceptor
        onPress={!loading ? onPress : () => null}
        disabled={disabled}
        style={[
          styles.button,
          buttonStyle,
          disabled && buttonDisableStyle,
          style,
        ]}
      >
        {leftIcon && (
          <View
            style={StyleSheet.flatten([
              styles.iconContainer,
              styles.leftIconContainer,
            ])}
          >
            {leftIcon}
          </View>
        )}
        {loading && !disabled ? (
          <Text
            type={Text.TextType.SUB_HEADING}
            bold
            style={[
              styles.title,
              titleStyle,
              disabled && textDisableStyle,
              textStyle,
            ]}
          >
            loading...
          </Text>
        ) : (
          <Text
            type={Text.TextType.SUB_HEADING}
            bold
            style={[
              styles.title,
              titleStyle,
              disabled && textDisableStyle,
              textStyle,
            ]}
          >
            {title}
          </Text>
        )}
        {rightIcon && (
          <View style={[styles.iconContainer, styles.rightIconContainer]}>
            {rightIcon}
          </View>
        )}
      </TouchReceptor>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    padding: SPACING.large,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    ...typographyStyles[Text.TextType.BUTTON],
  },
  loading: {
    marginVertical: 2,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIconContainer: {
    marginEnd: SPACING.medium,
  },
  rightIconContainer: {
    marginStart: SPACING.medium,
  },
});

Button.ButtonType = ButtonType;
export default Button;
