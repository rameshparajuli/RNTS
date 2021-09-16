import { StyleSheet } from 'react-native';

import { SPACING } from '~/constants';

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.large,
    borderRadius: 5,
    marginVertical: SPACING.large,
  },
  checkBoxText: {
    marginLeft: SPACING.large,
  },
});

export default styles;
