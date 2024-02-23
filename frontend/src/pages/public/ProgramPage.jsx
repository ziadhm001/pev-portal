import Direction from "../../components/sections/Directions";
import WhatHow from "../../components/sections/WhatHow";
import DefaultLayout from "../../layouts/DefaultLayout";
import QuoteCardContainer from "../../components/sections/QuoteCardContainer";
import Splitter from "../../components/sections/Splitter";
import CompaniesContainer from "../../components/sections/CompaniesContainer";
import ApplyBanner from "../../components/sections/ApplyBanner";
import GlobalNetwork from "../../components/sections/GlobalNetwork";
import PEVAcceleraProgarm from "../../components/sections/PEVAcceleraProgarm";
import FYI from "../../components/sections/FYI";
import TailoredToNeed from "../../components/sections/TailoredToNeed";
import Accomplish from "../../components/sections/Accomplish";
import Splitter2 from "../../components/sections/Splitter2";
import Funds from "../../components/sections/Fund";
import TimeIsNow from "../../components/sections/TimeIsNow";
import PostProgramSupport from "../../components/sections/PostProgramSupport";
import FloatingCards from "../../components/sections/FloatingCards";
import PrimeProgram from "../../components/sections/PrimeProgram";
import PrimeNetwork from "../../components/sections/PrimeNetwork";
import TrackRecord from "../../components/sections/TrackRecord";
import FAQ from "../../components/sections/FAQ";

function ProgramPage() {
  return (
    <DefaultLayout>
      <WhatHow />
      <Direction />
      <QuoteCardContainer />
      <Splitter />
      <CompaniesContainer />
      <ApplyBanner />
      <GlobalNetwork />
      <PEVAcceleraProgarm />
      <FYI />
      <TailoredToNeed />
      <Accomplish />
      <Splitter2 />
      <Funds />
      <TimeIsNow />
      <PostProgramSupport />
      <FloatingCards />
      <PrimeProgram />
      <PrimeNetwork />
      <TrackRecord />
      <FAQ />
      <ApplyBanner />
    </DefaultLayout>
  );
}

export default ProgramPage;
