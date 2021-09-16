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
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  containerBorder: {
    borderWidth: 1,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderColor: '#181A12',
  },
  headerText: {
    marginBottom: SPACING.small,
  },
  gradientWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.extraLarge,
  },
  gradientCard: {
    flex: 1,
    height: 195,
    borderRadius: 20,
    padding: SPACING.small,
  },
  separator: {
    marginHorizontal: SPACING.small,
  },
  gradientBorder: {
    flex: 1,
    height: 195,
    borderRadius: 20,
    overflow: 'hidden',
  },
  borderedCard: {
    margin: 2,
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
  },
});

export default styles;
