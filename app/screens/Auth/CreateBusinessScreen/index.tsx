import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import React from 'react';
import { View } from 'react-native';

import { CrossIcon, TickIcon } from '~/assets/svg/textInput';
import { GenericView, Header, Text, TextInput } from '~/components/common';
import AuthFooterBottom from '~/components/shared/AuthFooterBottom';
import { useLocalization } from '~/locale/LocalizationContext';
import { AuthStackParamList } from '~/navigator/routes';
import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';
import genericStyles from '~/styles/genericStyles';

import styles from './styles';

type CreateProfileScreenProp = StackNavigationProp<
  AuthStackParamList,
  'CREATE_BUSINESS_SCREEN'
>;

export default function CreateBusinessScreen(): JSX.Element {
  const navigation = useNavigation<CreateProfileScreenProp>();
  const { theme } = useAppSelector(appTheme);
  const { translations } = useLocalization();

  return (
    <GenericView
      padding
      scrollable
      header={<Header canGoBack />}
      footer={
        <AuthFooterBottom
          onPressBack={() => navigation.goBack()}
          onPressNext={() => navigation.navigate('SETUP_PROFILE_SCREEN')}
        />
      }
    >
      <Text style={genericStyles.mbLarge} bold type={Text.TextType.HEADING}>
        {translations.BUSINESS}
      </Text>
      <Text style={genericStyles.mbLarge}>Pick your Profile URL</Text>
      <TextInput
        label="PICK A URL"
        placeholder="url here..."
        rightIcon={<CrossIcon />}
        containerStyle={genericStyles.mbLarge}
      />
      <View style={[styles.checkBox, { backgroundColor: theme.toast.success }]}>
        <TickIcon />
        <Text style={[styles.checkBoxText, { color: theme.toast.text01 }]}>
          Virani is available!
        </Text>
      </View>
    </GenericView>
  );
}
