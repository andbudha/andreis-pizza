import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ActiveType } from '../../assets/types/types';

const slice = createSlice({
  name: 'filters',
  initialState: {
    selectedPage: 1 as number,
    itemsPerPage: 6 as number,
    activeType: 'All' as ActiveType,
    searchValue: '' as string,
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
    setSearchValue: (state, action: PayloadAction<{ searchValue: string }>) => {
      state.searchValue = action.payload.searchValue;
    },
  },
});

export const filters = slice.reducer;
export const filterActions = slice.actions;
