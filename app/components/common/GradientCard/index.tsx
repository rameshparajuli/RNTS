import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface IGradientCard {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  colors: (string | number)[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  useAngle?: boolean;
  angleCenter?: { x: number; y: number };
  angle?: number;
}

export default function GradientCard({
  children,
  colors,
  style,
  ...linearGradientProps
}: IGradientCard): JSX.Element {
  return (
    <LinearGradient
      colors={colors}
      style={style && style}
      {...linearGradientProps}
    >
      {children}
    </LinearGradient>
  );
}
