import ContactUs from "@a/components/ContactUs";
import ExchangeMoney from "@a/components/ExchangeMoney";
import Hero from "@a/components/Hero";
import Rates from "@a/components/Rates";
import HowToCreateAccount from "@a/components/Step";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* <ExchangeMoney /> */}

      <HowToCreateAccount />

      <Rates />
      <ContactUs />
    </main>
  );
}
