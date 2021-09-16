import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ToastType } from '~/components/common/ToastNotification/tostType.d';

import { AppThunk, RootState } from '../store';

export interface ICounterState {
  showToast?: boolean;
  message: string;
  type?: string;
}

const initialState: ICounterState = {
  showToast: false,
  message: '',
  type: '',
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToastMessage: (state, action: PayloadAction<ICounterState>) => {
      return {
        ...state,
        showToast: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    hideToastMessage: () => {
      return initialState;
    },
  },
});

export const { showToastMessage, hideToastMessage } = toastSlice.actions;
export const toast = (state: RootState): ICounterState => state.toast;

let timer: ReturnType<typeof setTimeout>;

export const hideToast = (): AppThunk => dispatch => {
  dispatch(hideToastMessage());
  clearTimeout(timer);
};

export const showToast =
  ({
    message,
    type = ToastType.SUCCESS,
  }: {
    message: string;
    type?: string;
  }): AppThunk =>
  dispatch => {
    dispatch(showToastMessage({ message, type }));
    timer = setTimeout(() => {
      dispatch(hideToast());
    }, ToastType.TIMER);
  };

export default toastSlice.reducer;
