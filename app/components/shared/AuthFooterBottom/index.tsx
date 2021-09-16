import React from 'react';
import { View } from 'react-native';

import { Button } from '~/components/common';
import { useLocalization } from '~/locale/LocalizationContext';

import styles from './styles';

interface IAuthFooterBottom {
  onPressNext: () => void;
  onPressBack: () => void;
}

export default function AuthFooterBottom({
  onPressNext,
  onPressBack,
}: IAuthFooterBottom): JSX.Element {
  const { translations } = useLocalization();

  return (
    <View style={styles.footerContent}>
      <Button
        style={styles.buttonStyle}
        type={Button.ButtonType.CLEAR}
        title={translations.BACK}
        onPress={onPressBack}
      />
      <Button
        style={styles.buttonStyle}
        title={translations.NEXT}
        onPress={onPressNext}
      />
    </View>
  );
}
