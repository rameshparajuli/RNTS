import React from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';

const Image = (
  props: JSX.IntrinsicAttributes & FastImageProps,
): JSX.Element => <FastImage {...props} />;

export default Image;
