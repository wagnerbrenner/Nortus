"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { authService } from "../services/login.service";
import { useAuthStore } from "@/store/auth.store";

export function useLogin() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation({
    mutationFn: authService.login,
    onSuccess: async (data) => {
      // Salva o token no store (que já salva no cookie)
      setAuth(data.token);

      // Salva nome do usuário no localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("user_name", data.username);
      }

      toast.success("Login realizado com sucesso!");
      router.push("/");
    },
    onError: () => {
      toast.error("Falha ao autenticar. Verifique suas credenciais.");
    },
  });
}
