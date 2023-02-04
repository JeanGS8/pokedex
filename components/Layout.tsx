import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}: {children: JSX.Element}){
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
}