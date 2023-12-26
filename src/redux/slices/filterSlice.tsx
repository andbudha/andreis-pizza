import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ActiveType } from '../../assets/types/types';

const slice = createSlice({
  name: 'filters',
  initialState: {
    selectedPage: 1 as number,
    itemsPerPage: 6 as number,
    activeType: 'All' as ActiveType,
  },
  reducers: {
    setSelectedPage: (
      state,
      action: PayloadAction<{ selectedPage: number }>
    ) => {
      state.selectedPage = action.payload.selectedPage;
    },
    setActiveType: (
      state,
      action: PayloadAction<{ activeType: ActiveType }>
    ) => {
      state.activeType = action.payload.activeType;
    },
  },
});

export const filters = slice.reducer;
export const filterActions = slice.actions;
