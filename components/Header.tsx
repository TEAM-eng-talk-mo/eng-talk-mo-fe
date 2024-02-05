const Header = () => {
  return (
    <header className="flex justify-between items-center my-6 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 font-semibold">
      <div>ETM Logo</div>
      <div>
        <ul className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          <li>
            <button>모임 등록</button>
          </li>
          <li>
            <button>회원가입</button>
          </li>
          <li>
            <button>로그인</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
