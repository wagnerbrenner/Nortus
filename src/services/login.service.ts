import { api } from "@/services/api";
import { LoginSchema } from "../schema/login.schema";

export const authService = {
  login: async (credentials: LoginSchema) => {
    const response = await api.post("/auth/login", {
      email: credentials.email,
      password: credentials.password,
    });

    if (!response.data || !response.data.access_token) {
      throw new Error("Resposta inválida do servidor");
    }

    return {
      token: response.data.access_token,
      username: response.data.user?.name || credentials.email,
    };
  },
};
