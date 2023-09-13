import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Simulating userAPI.fetchById(userId) for the sake of example
const countryAPI = {
  fetchById: async (userId) => {
    // Simulated API response
    return { data: { id: userId, name: 'John Doe' } };
  },
};

// First, create the thunk
const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

const initialState = {
  entities: [],
  loading: 'idle',
};

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
});

// Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123)); // You can dispatch this action in your Redux-connected component
