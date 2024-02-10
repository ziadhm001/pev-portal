import { useRef } from "react";
import CallToAction from "../../components/sections/CallToAction";
import FAQ from "../../components/sections/FAQ";
import LandingComponent from "../../components/sections/LandingComponent";
import MeetOurInvestors from "../../components/sections/MeetOurInvestors";
import OurTrackRecord from "../../components/sections/OurTrackRecord";
import PerksAndPartners from "../../components/sections/PerksAndPartners";
import QuoteSection from "../../components/sections/QuoteSection";
import Strap from "../../components/sections/Strap";
import VideoSection from "../../components/sections/VideoSection";
import DefaultLayout from "../../layouts/DefaultLayout";

function Home() {
  const ref = useRef(null);
  const scrollToRef = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  console.log(ref.current);
  return (
    <DefaultLayout>
      <LandingComponent onClick={scrollToRef} />
      <VideoSection myRef={ref} />
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
