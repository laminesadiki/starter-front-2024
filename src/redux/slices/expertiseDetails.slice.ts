import { createSlice } from '@reduxjs/toolkit';
import { IItem } from '@shared/interfaces';
import { expertiseDetailsSlice } from '@shared/interfaces/expertiseDetails.interface';

const initialState: expertiseDetailsSlice = {
   sectionTitle: 'Coffre-fort',
   folder: {} as IItem,
   rootFolder: [],
   expertiseId: '',
   expandedItemsList: [],
   safeTableSelectedItems: [],
   itemsListLink: '',
   rootItemId: '',
   itemId: '',
   showTabs: {
      showAdminTab: false,
      showContradictoryTab: false,
      showCostTrackingTab: false,
      showSearchTab: false,
   },
   searchKeyword: '',
};

export const expertiseDetails = createSlice({
   name: 'expertiseDetails',
   initialState,
   reducers: {
      updateExpertiseDetails: (state, action) => {
         state = { ...state, ...action.payload };
         return state;
      },
   },
});

export const { updateExpertiseDetails } = expertiseDetails.actions;

export default expertiseDetails.reducer;
