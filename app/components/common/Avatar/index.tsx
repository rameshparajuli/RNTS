import React from 'react';
import { View, StyleSheet, StyleProp, TextStyle } from 'react-native';

import { SPACING } from '~/constants';
import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';

import Text from '../Text';

interface IAvatar {
  label: string;
  showLabel?: boolean;
  size?: number;
  labelStyle?: StyleProp<TextStyle>;
}

const Avatar = ({
  label,
  size = 54,
  labelStyle,
  showLabel = false,
}: IAvatar): JSX.Element => {
  const { theme } = useAppSelector(appTheme);

  const getInitials = (name: string) => {
    let initials: any = name.split(' ');

    if (initials.length > 1) {
      initials = initials.shift().charAt(0) + initials.pop().charAt(0);
    } else {
      initials = name.substring(0, 2);
    }

    return initials.toUpperCase();
  };

  const avatarSize = () => {
    return {
      width: size,
      height: size,
      borderRadius: size && size / 2,
    };
  };

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.avatar,
          avatarSize(),
          { backgroundColor: theme.colorful.colorful08 },
        ]}
      >
        <Text bold type={Text.TextType.SUB_HEADING}>
          {getInitials(label)}
        </Text>
      </View>
      {showLabel && (
        <Text style={labelStyle && labelStyle} type={Text.TextType.BODY}>
          {label}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: SPACING.medium,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.medium,
  },
});

export default Avatar;
