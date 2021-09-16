import { StyleSheet } from 'react-native';

import { SPACING } from '~/constants';

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: SPACING.extraLarge,
    padding: SPACING.extraLarge,
  },
  containerBorder: {
    borderWidth: 1,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderColor: '#181A12',
  },
  avatarLabel: {
    fontWeight: 'bold',
  },
  themeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  themeWrapper: {
    margin: SPACING.tiny,
  },
  theme: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    margin: SPACING.medium,
  },
});

export default styles;
