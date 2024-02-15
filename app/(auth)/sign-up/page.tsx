"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const auth = "ABCDEFG";

const emailFormSchema = z.object({
  email: z.string().email({ message: "유효한 이메일을 작성해주세요." }),
});

const signUpFormSchema = z.object({
  email: z.string(),
  password: z
    .string()
    .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." })
    .max(20, { message: "비밀번호는 최대 20자 이하이어야 합니다." }),
  passwordCheck: z.string().min(5).max(15),
});

const SignUp = () => {
  const [authError, setAuthError] = useState({
    auth: {
      error: false,
      message: "인증 번호를 확인해주세요.",
    },
    signUp: {
      error: false,
      message: "비밀번호를 확인해주세요.",
    },
  });

  const [isAuthInputDisabled, setIsAuthInputDisabled] = useState(true);

  const {
    register: emailRegister,
    getValues: getEmailValues,
    handleSubmit: emailHandleSubmit,
    formState: { errors: emailErrors },
  } = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
  });

  const { register: authRegister, handleSubmit: authHandleSubmit } = useForm();
  const {
    register: signUpRegister,
    handleSubmit: signUpHandleSubmit,
    formState: { errors: signUpErrors },
  } = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  });

  const emailSubmit = (form: z.infer<typeof emailFormSchema>) => {
    // TODO: handling email input
    console.log(form.email);
    // TODO: able auth input
    setIsAuthInputDisabled(false);
  };

  const authSubmit = (form: any) => {
    // TODO: handling auth input
    if (form.auth !== auth) {
      setAuthError((state) => {
        const returnValue = { ...state };
        returnValue.auth.error = true;
        return returnValue;
      });
    }
    if (form.auth === auth) {
      setAuthError((state) => {
        const returnValue = { ...state };
        returnValue.auth.error = false;
        return returnValue;
      });
      // TODO: sign up email 설정
      console.log(getEmailValues("email"));
      // TODO: disable email input
      // TODO: disable auth input
    }
  };

  const signUpSubmit = (form: any) => {
    // TODO: handing sign up
    const { email, password, passwordCheck } = form;
    if (password === passwordCheck && email) {
      // TODO: success sign up
      console.log("success");
    }
    if (password !== passwordCheck) {
      setAuthError((state) => {
        const returnValue = { ...state };
        returnValue.signUp.error = false;
        return returnValue;
      });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="text-2xl">회원가입</div>
      <form onSubmit={emailHandleSubmit(emailSubmit)}>
        <div className="w-full flex justify-between">
          <input
            {...emailRegister("email")}
            className={cn(
              "border-2 rounded-md py-2 px-4 w-3/4 outline-none",
              emailErrors.email ? "border-red-500" : null
            )}
            placeholder="이메일"
          />
          <button className="w-1/5 bg-green-200 p-1 rounded-lg hover:bg-green-300 transition">
            메일 전송
          </button>
        </div>
        {emailErrors.email ? (
          <div className="text-red-500 text-sm">
            {emailErrors.email?.message}
          </div>
        ) : null}
      </form>
      <form onSubmit={authHandleSubmit(authSubmit)}>
        <div className="w-full flex justify-between">
          <input
            {...authRegister("auth", {
              disabled: isAuthInputDisabled,
            })}
            className={cn(
              "border-2 rounded-md py-2 px-4 outline-none w-3/4",
              authError.auth.error ? "border-red-500" : "",
              isAuthInputDisabled ? "bg-neutral-200" : ""
            )}
            placeholder="이메일 인증 번호"
          />
          <button
            className={cn(
              "w-1/5  p-1 rounded-lg  transition",
              isAuthInputDisabled
                ? "bg-neutral-200 cursor-default"
                : "bg-green-200 hover:bg-green-300 "
            )}>
            인증 확인
          </button>
        </div>
        {authError.auth.error ? (
          <div className="text-red-500 text-sm">인증 번호를 확인해주세요.</div>
        ) : null}
      </form>
      <form
        onSubmit={signUpHandleSubmit(signUpSubmit)}
        className="flex flex-col gap-5">
        {/**this input is email for authenticate*/}
        <input {...signUpRegister("email")} className="hidden" />
        <div>
          <input
            {...signUpRegister("password")}
            type="password"
            className={cn(
              "border-2 rounded-md py-2 px-4 outline-none w-full",
              signUpErrors.password ? "border-red-500" : ""
            )}
            placeholder="비밀번호"
          />
          {signUpErrors.password ? (
            <div className="text-red-500 text-sm">
              {signUpErrors.password.message}
            </div>
          ) : null}
        </div>
        <input
          {...signUpRegister("passwordCheck")}
          type="password"
          className="border-2 rounded-md py-2 px-4 w-full outline-none"
          placeholder="비밀번호 확인"
        />
        <button
          type="submit"
          className="bg-green-200 rounded-md py-2 px-4 w-full outline-none hover:bg-green-300 transition">
          계정생성
        </button>
      </form>
    </div>
  );
};

export default SignUp;
