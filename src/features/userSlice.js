import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    idToken: "",
    localId: "",
  },
  reducers: {
    setUser: (state, actions) => {
      state.email = actions.payload.email;
      state.idToken = actions.payload.idToken;
      state.localId = actions.payload.localId;
    },
    deletUser: (state) => {
      state.email = "";
      state.idToken = "";
      state.localId = "";
    },
  },
});

export const { setUser, deletUser } = userSlice.actions;
export default userSlice.reducer;
