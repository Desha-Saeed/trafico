import React from 'react';
import { Copyright, Footer, Hero } from '../components';
import AboutComp from '../components/AboutComp';

import {
  navData,
  heroData,
  aboutData,
  headerData,
  footerData
} from '../data.json';

function About({ navData, heroData, headerData, aboutData, footerData }) {
  console.log({ navData, headerData, aboutData, footerData });

  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page '>
      <Hero
        heroData={heroData}
        headerData={headerData}
        navData={navData}
      />

      <AboutComp aboutData={aboutData} />
      <Footer footerData={footerData} />
      <Copyright />
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      aboutData,

      footerData
    }
  };
};

export default About;
