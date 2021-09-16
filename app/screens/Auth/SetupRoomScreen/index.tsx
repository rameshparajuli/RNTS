import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import React from 'react';
import { View } from 'react-native';

import { CrossIcon } from '~/assets/svg/textInput';
import { GenericView, Header, Text, TextInput } from '~/components/common';
import AuthFooterBottom from '~/components/shared/AuthFooterBottom';
import { useLocalization } from '~/locale/LocalizationContext';
import { AuthStackParamList } from '~/navigator/routes';
import { useAppSelector } from '~/store/hooks';
import { appTheme } from '~/store/theme/themeSlice';
import genericStyles from '~/styles/genericStyles';

type CreateProfileScreenProp = StackNavigationProp<
  AuthStackParamList,
  'SETUP_ROOM_SCREEN'
>;

export default function SetupRoomScreen(): JSX.Element {
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
      <View style={genericStyles.mbLarge} />
      <View>
        <Text bold type={Text.TextType.HEADING}>
          {translations.ROOMS}
        </Text>
        <Text type={Text.TextType.LABEL}>
          Here are a few virtual rooms for your business.
        </Text>
        <Text type={Text.TextType.LABEL}>You can add more now or later.</Text>
      </View>
      <View style={genericStyles.separator} />
      <View style={genericStyles.mbLarge}>
        <TextInput
          label="PUBLIC ROOM"
          placeholder="url here..."
          rightIcon={<CrossIcon fill={theme.icon.active} />}
          containerStyle={genericStyles.mbLarge}
        />
        <TextInput
          label="PRIVATE ROOM"
          placeholder="url here..."
          rightIcon={<CrossIcon fill={theme.icon.active} />}
          containerStyle={genericStyles.mbLarge}
        />
      </View>
    </GenericView>
  );
}
