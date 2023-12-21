import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Pizza } from '../../assets/types/types';
import { pizzaAPI } from '../../api/pizzaAPI';

export const slice = createSlice({
  name: 'pizzas',
  initialState: {
    isLoading: false as boolean,
    pizzas: [] as Pizza[],
  },
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload.pizzas;
    });
  },
});

const fetchPizzas = createAsyncThunk<{ pizzas: Pizza[] }>(
  'pizzas/fetchPizzas',

  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    dispatch(pizzasActions.setIsLoading({ isLoading: true }));
    try {
      const response = await pizzaAPI.fetchPizzas();
      dispatch(pizzasActions.setIsLoading({ isLoading: false }));
      const pizzas = response.data;
      return { pizzas };
    } catch (error) {
      return rejectWithValue(null);
    } finally {
      //dispatch(pizzasActions.setIsLoading({ isLoading: false }));
    }
  }
);
export const pizzas = slice.reducer;
const pizzasActions = slice.actions;
export const pizzaSliceThunks = { fetchPizzas };
