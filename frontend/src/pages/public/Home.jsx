import CallToAction from "../../components/sections/CallToAction";
import FAQ from "../../components/sections/FAQ";
import MeetOurInvestors from "../../components/sections/MeetOurInvestors";
import OurTrackRecord from "../../components/sections/OurTrackRecord";
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
      <OurTrackRecord />
      <FAQ />
    </DefaultLayout>
  );
}

export default Home;
