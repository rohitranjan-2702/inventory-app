import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./async-storage";
export interface User {
  user_id: number;
  name: string;
  email: string;
  role: string;
}

// {"address": null, "dob": null, "email": "rohit1234@gmail.com", "gender": null, "name": "Rohit", "otp": 0, "password": "$2a$10$vEj.uNT6fxX3HljQ1Z3sueP93DkxNyoB8OtGFejIO2vN.9H4svY.a", "role": "SALESMAN", "user_id": "6b9c01f7-ba35-4336-88b7-9caf2e17f8bb"}

export interface AuthStore {
  error: any | null;
  loading: boolean;
  token: string | null;
  user: User | null;
  loginUser: (email: string, password: string) => any;
  setToken: (token: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      error: null,
      loading: false,
      user: null,
      token: null,
      loginUser: async (email: string, password: string) => {
        set({ loading: true });
        try {
          const user = await fetch(
            "https://auth-microservice-auth.onrender.com/api/v1/login",
            {
              method: "POST",
              body: JSON.stringify({ email, password }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await user.json();
          set({
            user: data.user,
            token: data.token,
          });
          set({ loading: false });
          return data;
        } catch (error) {
           set({ error: error });
        }
      },
      setToken: (token: string) => set({ token }),
      logout: () => {
        set({ token: null });
        set({ user: null });
      },
      isAuthenticated: () => !!get().token,
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
