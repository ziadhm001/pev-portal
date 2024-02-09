import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

function DefaultLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
