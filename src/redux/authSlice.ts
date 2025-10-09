import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserRole = "ishchi" | "mijoz";

interface User {
  username: string;
  password: string;
  role: UserRole;
  extraInfo?: WorkerInfo;
}

interface WorkerInfo {
  fullName: string;
  serviceType: string;
  experienceYears: string;
  price: string;
  location: string;
  phone: string;
  telegram?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

const saveUser: User | null = JSON.parse(
  localStorage.getItem("user") || "null"
);

const initialState: AuthState = {
  user: saveUser,
  isAuthenticated: !!saveUser,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    addWorkerInfo: (state, action: PayloadAction<WorkerInfo>) => {
      if (state.user && state.user.role === "ishchi") {
        state.user = { ...state.user, extraInfo: action.payload };
      }
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    login: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      const savedUser: User | null = JSON.parse(
        localStorage.getItem("user") || "null"
      );
      if (
        savedUser &&
        savedUser.username === action.payload.username &&
        savedUser.password === action.payload.password
      ) {
        state.user = savedUser;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Invalid username or password";
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("user");
    },
  },
});

export const { register, login, logout, addWorkerInfo } = authSlice.actions;
export default authSlice.reducer;
