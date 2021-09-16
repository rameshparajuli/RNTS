import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import React from 'react';
import { View, ScrollView } from 'react-native';

import { CheckMarkIcon } from '~/assets/svg/common';
import { GenericView, GradientCard, Header, Text } from '~/components/common';
import Feature from '~/components/screens/_CreateProfileScreen/Feature';
import AuthFooterBottom from '~/components/shared/AuthFooterBottom';
import { useLocalization } from '~/locale/LocalizationContext';
import { AuthStackParamList } from '~/navigator/routes';
import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';

import styles from './styles';

type CreateProfileScreenProp = StackNavigationProp<
  AuthStackParamList,
  'CREATE_PROFILE_SCREEN'
>;

export default function CreateProfileScreen(): JSX.Element {
  const navigation = useNavigation<CreateProfileScreenProp>();
  const { theme } = useAppSelector(appTheme);
  const { translations } = useLocalization();

  return (
    <GenericView
      header={<Header title="New Profile" />}
      footer={
        <AuthFooterBottom
          onPressBack={() => navigation.goBack()}
          onPressNext={() => navigation.navigate('CREATE_BUSINESS_SCREEN')}
        />
      }
    >
      <ScrollView
        style={[
          styles.container,
          theme.themeType === 'dark' && styles.containerBorder,
        ]}
      >
        <Text bold type={Text.TextType.SUB_HEADING} style={styles.headerText}>
          {translations.CREATE_YOUR_PROFILE}
        </Text>
        <Text bold type={Text.TextType.SM}>
          {translations.UNLOCK_ALL_FEATURE}
        </Text>
        <View style={styles.gradientWrapper}>
          <GradientCard
            useAngle={true}
            angle={330}
            locations={theme.gradient.gradient01.locations}
            colors={theme.gradient.gradient01.colors}
            style={styles.gradientCard}
          >
            <View style={styles.full}>
              <CheckMarkIcon />
              <View style={styles.card}>
                <Text bold>{translations.BUSINESS}</Text>
              </View>
            </View>
          </GradientCard>
          <View style={styles.separator} />
          <GradientCard
            useAngle={true}
            angle={330}
            locations={theme.gradient.gradient01.locations}
            colors={theme.gradient.gradient01.colors}
            style={styles.gradientBorder}
          >
            <View style={styles.borderedCard}>
              <Text bold>{translations.PERSONAL}</Text>
            </View>
          </GradientCard>
        </View>
        <Feature />
      </ScrollView>
    </GenericView>
  );
}
