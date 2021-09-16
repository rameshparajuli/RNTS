import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';

import { PlusIcon, TeamIcon } from '~/assets/svg/textInput';
import {
  Avatar,
  GenericView,
  Header,
  Text,
  TextInput,
} from '~/components/common';
import AuthFooterBottom from '~/components/shared/AuthFooterBottom';
import { useLocalization } from '~/locale/LocalizationContext';
import { AuthStackParamList } from '~/navigator/routes';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { appTheme, setTheme } from '~/store/theme/themeSlice';
import genericStyles from '~/styles/genericStyles';
import darkTheme from '~/theme/darkTheme';
import lightTheme from '~/theme/lightTheme';
import { ThemeType } from '~/theme/theme.d';

import styles from './styles';

type CreateProfileScreenProp = StackNavigationProp<
  AuthStackParamList,
  'SETUP_PROFILE_SCREEN'
>;

const colorThemeList = [
  {
    type: ThemeType.DARK,
    color: '#000000',
  },
  {
    type: ThemeType.LIGHT,
    color: '#FFFFFF',
  },
];

export default function SetupProfileScreen(): JSX.Element {
  const navigation = useNavigation<CreateProfileScreenProp>();
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(appTheme);
  const { translations } = useLocalization();
  const [selectedTheme, setSelectedTheme] = React.useState('');

  React.useEffect(() => {
    setSelectedTheme(theme.themeType);
  }, []);

  const handleTheme = (item: { type: string; color: string }) => {
    setSelectedTheme(item.type);
    if (item.type === ThemeType.LIGHT) {
      dispatch(
        setTheme({
          theme: lightTheme,
          activeTheme: ThemeType.DARK,
        }),
      );
    } else {
      dispatch(
        setTheme({
          theme: darkTheme,
          activeTheme: ThemeType.LIGHT,
        }),
      );
    }
  };

  return (
    <GenericView
      header={<Header canGoBack title="New Profile" />}
      footer={
        <AuthFooterBottom
          onPressBack={() => navigation.goBack()}
          onPressNext={() => navigation.navigate('SETUP_ROOM_SCREEN')}
        />
      }
    >
      <ScrollView
        style={[
          styles.container,
          theme.themeType === 'dark' && styles.containerBorder,
        ]}
      >
        <View style={[genericStyles.center, genericStyles.mbLarge]}>
          <Avatar
            labelStyle={styles.avatarLabel}
            label="Virani Jewelers"
            showLabel
            size={112}
          />
          <Text>Tap the icon to upload new icon</Text>
        </View>
        <View style={genericStyles.mbLarge}>
          <TextInput
            label="HOW MANY PEOPLE IN YOUR BUSINESS"
            placeholder="url here..."
            rightIcon={<TeamIcon fill={theme.icon.active} />}
            containerStyle={genericStyles.mbLarge}
          />
          <TextInput
            label="HOW MANY PEOPLE IN YOUR BUSINESS"
            placeholder="url here..."
            rightIcon={<PlusIcon fill={theme.icon.active} />}
            containerStyle={genericStyles.mbLarge}
          />
        </View>
        <View>
          <Text style={genericStyles.mbLarge} type={Text.TextType.LABEL}>
            CHOOSE COLOR THEME
          </Text>
          <View style={styles.themeContainer}>
            {colorThemeList.map(item => (
              <TouchableOpacity
                onPress={() => handleTheme(item)}
                key={item.type}
                style={[
                  styles.themeWrapper,
                  selectedTheme === item.type && {
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: theme.selection.active,
                  },
                ]}
              >
                <View style={[styles.theme, { backgroundColor: item.color }]} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </GenericView>
  );
}
