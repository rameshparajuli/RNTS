import React from 'react';
import {
  View,
  StyleSheet,
  TextInput as InputComponent,
  TextInputProps,
  ViewStyle,
} from 'react-native';

import { DIMENS, SPACING } from '~/constants';
import spacing from '~/constants/spacing';
import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';

import Text from '../Text';

interface ITextInput extends TextInputProps {
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  disabled?: boolean;
  label: string;
  errorMessage?: string;
  leftIcon?: React.ReactChild;
  rightIcon?: React.ReactChild;
  invert?: boolean;
  rounded?: boolean;
  assignRef?: any;
}

const TextInput = ({
  containerStyle,
  inputContainerStyle,
  inputStyle,
  disabled = false,
  label,
  errorMessage,
  leftIcon,
  rightIcon,
  invert = false,
  rounded = true,
  assignRef = () => null,
  ...props
}: ITextInput): JSX.Element => {
  const { theme } = useAppSelector(appTheme);
  const [focus, setFocus] = React.useState(false);

  const inputCStyle = {
    borderColor: errorMessage
      ? theme.danger.default
      : focus
      ? theme.brandColor.primary
      : theme.field.textActive,
    borderBottomWidth: 1,
    borderBottomColor: theme.field.line,
    backgroundColor: theme.background.bg01,
    borderRadius: rounded ? spacing.small : 0,
  };

  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      {!!label && (
        <Text
          invert={invert}
          style={styles.labelStyle}
          bold
          type={Text.TextType.LABEL}
        >
          {label}
        </Text>
      )}
      <View style={[styles.inputContainer, inputCStyle, inputContainerStyle]}>
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

        <InputComponent
          keyboardAppearance={theme.themeType}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          underlineColorAndroid={invert ? '#fff' : 'transparent'}
          editable={!disabled}
          placeholderTextColor={'#9098B1'}
          style={[
            {
              flex: 1,
              alignSelf: 'center',
              minHeight: DIMENS.textInputHeight,
              color: theme.text.active,
              fontSize: 15,
            },
            inputStyle,
          ]}
          ref={component => assignRef && assignRef(component)}
          {...props}
        />

        {rightIcon && (
          <View
            style={StyleSheet.flatten([
              styles.iconContainer,
              styles.rightIconContainer,
            ])}
          >
            {rightIcon}
          </View>
        )}
      </View>
      {!!errorMessage && (
        <Text
          style={[
            styles.error,
            { color: invert ? theme.danger.default : theme.danger.default },
          ]}
        >
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.tiny,
    // paddingHorizontal: spacing.medium,
  },
  labelStyle: {
    marginBottom: SPACING.tiny,
  },
  error: {
    margin: SPACING.small,
    fontSize: 15,
  },
  iconContainer: {
    height: DIMENS.textInputHeight,
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

export default TextInput;
