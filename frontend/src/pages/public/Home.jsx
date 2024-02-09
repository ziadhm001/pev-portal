import CallToAction from "../../components/sections/CallToAction";
import MeetOurInvestors from "../../components/sections/MeetOurInvestors";
import PerksAndPartners from "../../components/sections/PerksAndPartners";
import QuoteSection from "../../components/sections/QuoteSection";
import Strap from "../../components/sections/Strap";
import VideoSection from "../../components/sections/VideoSection";
import DefaultLayout from "../../layouts/DefaultLayout";

function Home() {
  return (
    <DefaultLayout>
      <VideoSection />
      <QuoteSection />
      <Strap />
      <CallToAction />
      <PerksAndPartners />
      <MeetOurInvestors />
    </DefaultLayout>
  );
}

export default Home;
