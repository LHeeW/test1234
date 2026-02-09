"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SignUpRequest } from "@/actions/Auth/auth";
import {
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordConfirm,
} from "@/utils/validation";
import { usePostAuthSignUpMutation } from "./TanstackQuery/Mutation/use-auth-mutation";

export const useSignUpInput = () => {
  const router = useRouter();
  const { mutate, isPending } = usePostAuthSignUpMutation();

  const [errors, setErrors] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleSignUp = (formData: FormData) => {
    const rawFormData = Object.fromEntries(formData.entries());
    const data = rawFormData as unknown as SignUpRequest;

    const newErrors = {
      email: validateEmail(data.email),
      nickname: validateNickname(data.nickname),
      password: validatePassword(data.password),
      passwordConfirmation: validatePasswordConfirm(
        data.password,
        data.passwordConfirmation,
      ),
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((msg) => msg !== "")) return;

    mutate(data, {
      onSuccess: () => {
        alert("회원가입이 완료되었습니다.");
        router.push("/login");
      },
      onError: (error) => {
        if (error.message === "Internal Server Error") {
          alert("중복된 닉네임입니다.");
        } else {
          alert(error.message);
        }
      },
    });
  };

  return { handleSignUp, isPending, errors };
};
