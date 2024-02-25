import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion"

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
  const [showLanding, setShowLanding] = useState(true)
  const ref = useRef(null);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if(!latest)
      setShowLanding(true)
  })

  const scrollToRef = () => {
    setShowLanding(false)
    };
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [ref, showLanding])
  return (
    <DefaultLayout transparencyPercentage={showLanding}>
      <LandingComponent onClick={scrollToRef} />
      {
        !showLanding && <>
        <VideoSection myRef={ref} />
        <QuoteSection />
        <Strap />
        <CallToAction />
        <PerksAndPartners />
        <MeetOurInvestors />
        <OurTrackRecord />
        <FAQ />
        </>
      }
    </DefaultLayout>
  );
}

export default Home;
