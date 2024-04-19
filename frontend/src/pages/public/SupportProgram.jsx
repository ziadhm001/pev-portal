import DefaultLayout from "../../layouts/DefaultLayout";
import PostProgramSupport from "../../components/sections/PostProgramSupport";
import FloatingCards from "../../components/sections/FloatingCards";
import PrimeProgram from "../../components/sections/PrimeProgram";
import PrimeNetwork from "../../components/sections/PrimeNetwork";
import TrackRecord from "../../components/sections/TrackRecord";
import FAQ from "../../components/sections/FAQ";
import ApplyBanner from "../../components/sections/ApplyBanner";

export default function SupportProgram() {
  return (
    <DefaultLayout>
      <PostProgramSupport />
      <FloatingCards />
      <PrimeProgram />
      <PrimeNetwork />
      <TrackRecord />
      <ApplyBanner />
    </DefaultLayout>
  );
}
