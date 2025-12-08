import { create } from "zustand";
import Cookies from "js-cookie";

type AuthState = {
  token: string | null;
  setAuth: (token: string) => void;
  logout: () => void;
  loadFromStorage: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,

  setAuth: (token) => {
    Cookies.set("token", token, { expires: 7 });
    set({ token });
  },

  logout: () => {
    Cookies.remove("token");
    set({ token: null });
  },

  loadFromStorage: () => {
    const token = Cookies.get("token") || null;
    set({ token });
  },
}));
