import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';
import { SearchInputType } from '@src/types/searchInput.type';
import { ROLES } from '@shared/enums/roles.enum';

const initialState: SearchInputType = {
   email: '',
   profil: ROLES?.LAWYER,
   firstName: '',
   lastName: '',
   isClickSearchBtn: false,
   isValidForm: false,
   page: 0,
};

export const searchInputSlice = createSlice({
   name: 'directorySearchInput',
   initialState,
   reducers: {
      updateSearchInput: (
         state,
         action: PayloadAction<Partial<SearchInputType>>,
      ) => {
         state = { ...state, ...action.payload };
         return state;
      },
   },
});

export const selectCount = (state: RootState) => state.searchInputReducer;
export const { updateSearchInput } = searchInputSlice.actions;

export default searchInputSlice.reducer;
