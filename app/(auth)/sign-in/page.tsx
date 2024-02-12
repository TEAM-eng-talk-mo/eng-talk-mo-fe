import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="w-[400px] mt-5 font-semibold">
      <form className="flex flex-col gap-3">
        <div className="text-2xl flex justify-center">로그인</div>
        <input
          placeholder="이메일"
          className="border rounded-md py-2 px-4"></input>
        <input
          type="password"
          placeholder="비밀번호"
          className="border rounded-md py-2 px-4"></input>
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
