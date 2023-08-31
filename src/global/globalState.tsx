import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggle: false,
  user: "" || null
}

const globalState = createSlice({
  name: "second",
  initialState,
  reducers: {}
});

export const {} = globalState.actions

export default globalState.reducer