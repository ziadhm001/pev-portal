import FAQ from "../../components/sections/FAQ";
import DefaultLayout from "../../layouts/DefaultLayout";

function SupportPage() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  backToTop()
  return (
    <DefaultLayout>
      <br />
      <FAQ />
    </DefaultLayout>
  );
}

export default SupportPage;
