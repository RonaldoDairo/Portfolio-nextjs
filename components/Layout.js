import Navbar from "./Navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>

        <Footer/>
    </>
  );
};

export default Layout;
