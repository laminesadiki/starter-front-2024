import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user.type';

const initialState: Partial<User> = {};

export const userSlice = createSlice({
   name: 'userInfo',
   initialState,
   reducers: {
      // TODO: add state type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      addUser: (state: any, action: PayloadAction<User>) => {
         const data = {
            email: action.payload.email,
            password: action.payload.password,
         };
         state.push(data);
      },
   },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
