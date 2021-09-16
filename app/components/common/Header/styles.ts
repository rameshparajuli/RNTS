import { StyleSheet } from 'react-native';

import { SPACING } from '~/constants';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.medium,
  },
  headerText: {
    textAlign: 'center',
    flex: 1,
  },
  full: {
    flex: 1,
  },
});

export default styles;
