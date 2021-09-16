import { StyleSheet } from 'react-native';

import { SPACING } from '~/constants';

const styles = StyleSheet.create({
  featureWrapper: {
    marginTop: SPACING.large,
  },
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.medium,
    borderBottomWidth: 1,
  },
  iconStyle: {
    marginRight: SPACING.medium,
  },
});

export default styles;
