import React from 'react';
import aboutHeroImage from "@/assets/images/about/herosection.svg";
import HeroSection from "@/components/shared/HeroSection";

const AboutHeroSection = () => {
  return (
    <>
      <HeroSection
        title={
          <>
            <p className='dark:text-white'>About <span className="text-main">Us</span></p>
          </>
        }
        description={
        <>
        <p className="text-gray-500 dark:text-grayDark">We are a team of developers who are passionate about creating beautiful and functional websites that help businesses connect with their audience through powerful survey tools.</p>
        </>
        }
        primaryButtonText="Exolore"
        secondaryButtonText="create"
        heroImage={aboutHeroImage}
        primaryButtonLink="/create-survey"
        secondaryButtonLink="/contact"
      />
    </>
  );
}

export default AboutHeroSection;
