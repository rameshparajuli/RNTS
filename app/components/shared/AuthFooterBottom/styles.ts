import { StyleSheet } from 'react-native';

import { SPACING } from '~/constants';

const styles = StyleSheet.create({
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.medium,
  },
  buttonStyle: {
    borderRadius: 100,
    paddingHorizontal: 50,
  },
});

export default styles;
