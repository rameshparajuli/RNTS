import { useNavigation } from '@react-navigation/native';

import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { BackIcon } from '~/assets/svg/common';
import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';

import Text from '../Text';
import styles from './styles';

interface IHeader {
  canGoBack?: boolean;
  title?: string;
}

export default function Header({
  canGoBack = false,
  title,
}: IHeader): JSX.Element {
  const { theme } = useAppSelector(appTheme);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.full}>
        {canGoBack && <BackIcon fill={theme.icon.active} />}
      </TouchableOpacity>
      <View style={styles.full}>
        <Text bold type={Text.TextType.SUB_HEADING} style={styles.headerText}>
          {title}
        </Text>
      </View>
      <View style={styles.full} />
    </View>
  );
}
