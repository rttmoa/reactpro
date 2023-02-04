import { createSlice, configureStore } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'mystate',
  initialState: {
    aaa: 0,
    bbb: 1
  },
  // reducers
  reducers: {
    setAaa: (state,{payload}) => {
      state.aaa = payload
    },
    setBbb: (state,{payload}) => {
      state.bbb = payload
    }
  },
  // async reducers 
  extraReducers:{}
});

export const actions =  slice.actions || {};
export const store = configureStore({
  reducer: slice.reducer,
});