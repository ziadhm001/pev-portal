import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

function DefaultLayout({ children, transparencyPercentage }) {
  return (
    <>
      <NavBar transparency={transparencyPercentage} />
      {children}

      {!transparencyPercentage && <Footer />}
    </>
  );
}

export default DefaultLayout;
