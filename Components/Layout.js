import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div className="Wrapper">
      <Header />
      {children}
    </div>
  );
};
export default Layout;
