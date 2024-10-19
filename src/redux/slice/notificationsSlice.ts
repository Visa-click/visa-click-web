import { TNotificationType } from '@interfaces/notification';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Notification = {
  id: string;
  message: string;
  type: TNotificationType;
};

const initialState: Notification[] = [];

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      if (state.length >= 3) {
        state.shift();
      }
      state.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      return state.filter((notification) => notification.id !== action.payload);
    },
  },
});

export const { addNotification, removeNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
