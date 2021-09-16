import React from 'react';
import { View, Switch } from 'react-native';

import { CartIcon } from '~/assets/svg/common';
import { Text } from '~/components/common';
import { useLocalization } from '~/locale/LocalizationContext';
import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';

import styles from './styles';

const featuresList = [
  { title: 'Events' },
  { title: 'Education/Training' },
];

export default function SwitchList(): JSX.Element {
  const { theme } = useAppSelector(appTheme);
  const { translations } = useLocalization();

  const List = ({ item }: { item: { title: string } }) => {
    return (
      <View style={[styles.listView, { borderBottomColor: theme.field.line }]}>
        <View style={styles.iconStyle}>
          <CartIcon />
        </View>
        <View style={{ flex: 1 }}>
          <Text bold>{item.title}</Text>
        </View>
        <Switch />
      </View>
    );
  };

  return (
    <View>
      <Text bold type={Text.TextType.HEADING}>
        {translations.ENABLE_FEATURE}
      </Text>
      <Text type={Text.TextType.SM}>{translations.CUSTOMIZE_FEATURE}</Text>
      <View style={styles.featureWrapper}>
        {featuresList.map(item => (
          <List key={item.title} item={item} />
        ))}
      </View>
    </View>
  );
}
