import { StyleSheet } from 'react-native';

import { SPACING } from '~/constants';

const styles = StyleSheet.create({
  mbLarge: {
    marginBottom: SPACING.large,
  },
  separator: {
    marginVertical: SPACING.large,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
