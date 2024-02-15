interface AuthLayout {
  children: React.ReactNode;
}
const AuthLayout: React.FC<AuthLayout> = ({ children }) => {
  return <div className="w-[400px] mt-5 font-semibold">{children}</div>;
};

export default AuthLayout;
