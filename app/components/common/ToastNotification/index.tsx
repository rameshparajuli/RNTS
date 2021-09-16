import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { DIMENS, SPACING } from '~/constants';
import { RootState } from '~/store/store';

import Text from '../Text';
import { ToastType } from './tostType.d';

Toast.ToastType = ToastType;
export default function Toast(): JSX.Element {
  const { type, message } = useSelector((state: RootState) => state.toast);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: type === ToastType.SUCCESS ? '#E7FCF0' : '#dfdfdf' },
      ]}
    >
      <View style={styles.toastWrapper}>
        <Text
          style={[
            styles.textMessage,
            { color: type === ToastType.SUCCESS ? '#0D833F' : '#d3d3d3' },
          ]}
        >
          {message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '8%',
    alignSelf: 'center',
    paddingHorizontal: SPACING.large,
    paddingVertical: SPACING.medium,
    borderRadius: DIMENS.borderRadius,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 9,
    elevation: 5,
  },
  textMessage: {
    marginLeft: SPACING.small,
  },
  toastWrapper: {
    flexDirection: 'row',
  },
});
