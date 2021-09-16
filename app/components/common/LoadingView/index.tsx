import React from 'react';
import { View, StyleSheet } from 'react-native';

import Spinner from '../Spinner';

interface ILoadingView {
  size: 'large' | 'small';
  backgroundColor: string;
}

const LoadingView = ({
  size = 'large',
  backgroundColor,
}: ILoadingView): JSX.Element => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: !backgroundColor ? 'transparent' : backgroundColor,
        },
      ]}
    >
      <Spinner size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingView;
