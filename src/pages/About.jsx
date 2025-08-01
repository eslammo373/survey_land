import React from "react";
import  AboutHeroSection  from '@/components/About/AboutHeroSection';
import AboutTreadingAction from "@/components/About/AboutTreadingAction";
import Aboutleadership from "@/components/About/Aboutleadership";
import AboutHowItWorks from "@/components/About/AboutHowItWorks";
import AboutTeamLeader from "@/components/About/AboutTeamLeader";
const About = () => {
  return (<>
  <div>
      <AboutHeroSection />
    <AboutTreadingAction />
    <Aboutleadership/>
    <AboutHowItWorks/>
    <AboutTeamLeader/>
  </div>
    </>
  );
};

export default About;
