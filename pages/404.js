import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => {
  return <Layout>
    <div className="text-center">
    <h1>404</h1>
    <p>Page not found. Please return  <Link href="/">Home</Link> </p>  
    </div>
  </Layout>;
};

export default custom404;
