import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    selectedPage: 1 as number,
    itemsPerPage: 6 as number,
  },
  reducers: {
    setSelectedPage: (
      state,
      action: PayloadAction<{ selectedPage: number }>
    ) => {
      state.selectedPage = action.payload.selectedPage;
    },
  },
});

export const filters = slice.reducer;
export const filterActions = slice.actions;
