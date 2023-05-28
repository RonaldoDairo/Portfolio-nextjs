import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import classNames from "classnames";


const Layout = ({ children, title, showFooter = true, dark = false }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  
  return (
    <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar />
      <main className="container py-4">
        {/* Title */}
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}
        {/* Content */}
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
