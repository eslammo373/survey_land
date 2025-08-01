import React from "react";
import PricingHeader from "@/components/Pricing/PricingHeader";
import PricingCards from "../components/Pricing/PricingCards";

const Pricing = () => {
  return <section className="bg-secondaryLight dark:bg-secondaryDark">
    <div className="container">
    <PricingHeader />
    <PricingCards/>
    </div>
  </section>
};

export default Pricing;
