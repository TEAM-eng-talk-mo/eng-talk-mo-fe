interface AuthLayout {
  children: React.ReactNode;
}
const AuthLayout: React.FC<AuthLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default AuthLayout;
