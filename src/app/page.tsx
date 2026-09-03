import Hero from "@/components/sections/Hero";
import QuickInfoBar from "@/components/sections/QuickInfoBar";
import AboutComfort from "@/components/sections/AboutComfort";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TrustStats from "@/components/sections/TrustStats";
import Doctors from "@/components/sections/Doctors";
import Testimonials from "@/components/sections/Testimonials";
import AppointmentSection from "@/components/sections/AppointmentSection";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickInfoBar />
      <AboutComfort />
      <Services />
      <WhyChooseUs />
      <TrustStats />
      <Doctors />
      <Testimonials />
      <AppointmentSection />
      <FAQ />
      <Location />
    </>
  );
}
