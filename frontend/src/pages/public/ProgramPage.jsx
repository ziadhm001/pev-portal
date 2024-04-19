import Direction from "../../components/sections/Directions";
import WhatHow from "../../components/sections/WhatHow";
import DefaultLayout from "../../layouts/DefaultLayout";
import QuoteCardContainer from "../../components/sections/QuoteCardContainer";
import Splitter from "../../components/sections/Splitter";
import CompaniesContainer from "../../components/sections/CompaniesContainer";
import ApplyBanner from "../../components/sections/ApplyBanner";
import GlobalNetwork from "../../components/sections/GlobalNetwork";
import ProgramHero from "../../components/sections/ProgramHero";
import { useState } from "react";

function ProgramPage() {
  const [inView, setInView] = useState(false);
  return (
    <DefaultLayout transparencyPercentage={inView}>
      <ProgramHero setInView={setInView} />
      <WhatHow />
      <Direction />
      <QuoteCardContainer />
      <Splitter />
      <CompaniesContainer />
      <ApplyBanner />
      <GlobalNetwork />
    </DefaultLayout>
  );
}

export default ProgramPage;
