import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import darkTheme from '~/theme/darkTheme';
import { ITheme, ThemeType } from '~/theme/theme.d';

import { RootState } from '../store';

export interface IThemeState {
  theme: ITheme;
  activeTheme: ThemeType;
}

const initialState: IThemeState = {
  theme: darkTheme,
  activeTheme: ThemeType.DARK,
};

export const toastSlice = createSlice({
  name: 'appTheme',
  initialState,
  reducers: {
    setTheme: (_state, action: PayloadAction<IThemeState>) => {
      const { theme, activeTheme } = action.payload;
      return { theme, activeTheme };
    },
  },
});

export const { setTheme } = toastSlice.actions;
export const appTheme = (state: RootState): IThemeState => state.appTheme;

export default toastSlice.reducer;
