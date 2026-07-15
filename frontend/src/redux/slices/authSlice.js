import { createSlice } from "@reduxjs/toolkit";
import { loadAuth } from "../../utils/authHelper";
import { removeAuthCache } from "../../utils/authStorage";

const savedAuth = loadAuth();

const safeAuth =
  savedAuth &&
  typeof savedAuth === "object" &&
  savedAuth.user &&
  typeof savedAuth.user === "object";

const initialState = safeAuth
  ? {
      user: savedAuth.user,
      token: savedAuth.token,
      role: savedAuth.role,
      isAuthenticated: true,
      status: savedAuth.status || null,
    }
  : {
      user: null,
      token: null,
      role: null,
      isAuthenticated: false,
      status: null,
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   loginSuccess: (state, action) => {
  const user = action.payload.user;

  state.user = {
    _id: user._id || user.id,
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    role: user.role,
    profileImage: user.profileImage||null,
    status: user.status || null,
  };

  state.token = action.payload.token;
  state.role = user.role;
  state.status = user.status || null;
  state.isAuthenticated = true;
},

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.status = null;
      state.isAuthenticated = false;
      removeAuthCache();
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
