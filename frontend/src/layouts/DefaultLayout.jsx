import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

function DefaultLayout({ children, transparencyPercentage }) {
  return (
    <>
      <NavBar transparencyPercentage={transparencyPercentage} />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
