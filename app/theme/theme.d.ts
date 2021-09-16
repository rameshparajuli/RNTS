import { StatusBarStyle } from 'react-native';

export enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light',
}
export type ITheme = {
  themeType: ThemeType;
  appbar: {
    statusBarColor: string;
    barStyle: typeof StatusBarStyle;
    backgroundColor: string;
    tintColor: string;
  };
  button: {
    iconActive: string;
    textActive: string;
    deactive: string;
    textDeactive: string;
    active: string;
    deactiveButtonText: string;
    colorful06: string;
    textDanger: string;
    toggleActive: string;
    deactiveBg02: string;
  };
  background: {
    bg01: string;
  };
  brandColor: {
    primary: string;
    secondary: string;
  };
  text: {
    active: string;
    deactive01: string;
    deactive02: string;
  };
  title: {
    active: string;
    deactive: string;
  };
  field: {
    textDeactive: string;
    textActive: string;
    nameActive: string;
    cursorActive: string;
    name: string;
    line: string;
    primary: string;
    bgWhite: string;
  };
  colorful: {
    colorful01: string;
    colorful02: string;
    colorful03: string;
    colorful04: string;
    colorful05: string;
    colorful06: string;
    colorful07: string;
    colorful08: string;
  };
  gradient: {
    gradient01: {
      colors: (string | number)[];
      locations?: number[];
    };
    gradient02: {
      colors: (string | number)[];
      locations?: number[];
    };
    gradient03: {
      colors: (string | number)[];
      locations?: number[];
    };
    gradient04: {
      colors: (string | number)[];
      locations?: number[];
    };
    gradient05: {
      colors: (string | number)[];
      locations?: number[];
    };
    gradient06: {
      colors: (string | number)[];
      locations?: number[];
    };
    gradient07: {
      colors: (string | number)[];
      locations?: number[];
    };
    gradient08: {
      colors: (string | number)[];
      locations?: number[];
    };
    gradient09: {
      colors: (string | number)[];
      locations?: number[];
    };
    gradient10: {
      colors: (string | number)[];
      locations?: number[];
    };
  };
  toast: {
    backgroundInfo: string;
    text01: string;
    text02: string;
    success: string;
    iconSuccess: string;
    btn: string;
    error: string;
  };
  icon: {
    bg01: string;
    bg02: string;
    bg03: string;
    success: string[];
    active: string;
    deactiveDarkest: string;
    strokeLight: string;
    primary: string;
    stokeDark: string;
  };
  card: {
    gradient: {
      bg01: string[];
      textActive: string;
    };
  };
  success: {
    default: string;
  };
  danger: {
    default: string;
  };
  selection: {
    active: string;
  };
};

export interface CustomThemeProps {
  theme?: ITheme;
}
