"use client";

import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().min(1, { message: "이메일을 입력하세요." }).max(50),
  password: z.string().min(1, { message: "비밀번호를 입력하세요." }).max(50),
});

const SignIn = () => {
  const outsideOuth = {
    google: {
      href: "/",
      icon: "/google_logo.svg",
      text: "Google 계정으로 로그인",
    },
    kakao: {
      href: "/",
      icon: "/kakao_logo.svg",
      text: "Kakao 계정으로 로그인",
    },
  };
  const outsideOuthKey = Object.keys(outsideOuth) as Array<
    keyof typeof outsideOuth
  >;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (form: z.infer<typeof formSchema>) => {
    // TODO: Handle form submit
    console.log(form.email);
    console.log(form.password);
  };

  return (
    <div className="w-[400px] mt-5 font-semibold">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="text-2xl flex justify-center">로그인</div>
        <div>
          <input
            {...register("email")}
            placeholder="이메일"
            className={cn(
              "border-2 rounded-md py-2 px-4 w-full outline-none",
              errors.email ? "border-red-500 " : ""
            )}
          />
          {errors.email ? (
            <div className="text-red-600 mt-1">{errors.email.message}</div>
          ) : null}
        </div>
        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="비밀번호"
            className={cn(
              "border-2 rounded-md py-2 px-4 w-full outline-none",
              errors.email ? "border-red-500" : ""
            )}
          />
          {errors.password ? (
            <div className="text-red-600 mt-1">{errors.password.message}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full rounded-md py-2 px-4 bg-green-200 hover:bg-green-300 transition">
          로그인
        </button>
        <Link
          href={"sign-up"}
          className="flex justify-center text-sm text-blue-500 hover:text-blue-600 r">
          가입하기 &rarr;
        </Link>
      </form>
      <div className="border-t-2 mt-5 pt-5 flex flex-col gap-5">
        {outsideOuthKey.map((key) => (
          <Link
            href={outsideOuth[key].href}
            key={key}
            className="w-full rounded-md py-2 px-8 border-2 text-neutral-600 flex hover:text-neutral-950 transition">
            <Image
              alt={key}
              className="mr-2"
              width={25}
              height={25}
              src={outsideOuth[key].icon}
            />
            {outsideOuth[key].text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SignIn;
