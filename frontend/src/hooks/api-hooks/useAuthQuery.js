import { login, signup } from "@/api-functions/auth.api";
import { useMutation } from "@tanstack/react-query";

export const usePostSignupMutation = (options) => {
  return useMutation({
    mutationFn: signup,
    ...options,
  });
};

export const usePostLoginMutation = (options) => {
  return useMutation({
    mutationFn: login,
    ...options
  })
}
