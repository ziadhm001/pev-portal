import DefaultLayout from "../../layouts/DefaultLayout";
import PEVAcceleraProgarm from "../../components/sections/PEVAcceleraProgarm";
import FYI from "../../components/sections/FYI";
import TailoredToNeed from "../../components/sections/TailoredToNeed";
import Accomplish from "../../components/sections/Accomplish";
import Splitter2 from "../../components/sections/Splitter2";
import Funds from "../../components/sections/Fund";
import TimeIsNow from "../../components/sections/TimeIsNow";

export default function CoreProgram() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  backToTop()
  return (
    <DefaultLayout>
      <PEVAcceleraProgarm />
      <FYI />
      <TailoredToNeed />
      <Accomplish />
      <Splitter2 />
      <Funds />
      <TimeIsNow />
    </DefaultLayout>
  );
}
