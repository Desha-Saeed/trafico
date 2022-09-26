import React from 'react';
//import components
import { Hero, Footer, Copyright } from '../components';
import HowComp from '../components/HowComp';

//import data
import {
  headerData,
  heroData,
  navData,
  howData,
  footerData
} from '../data.json';
function How({ headerData, heroData, navData, howData, footerData }) {
  return (
    <div>
      <Hero
        headerData={headerData}
        navData={navData}
        heroData={heroData}
      />
      <HowComp howData={howData} />
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
      howData,

      footerData
    }
  };
};
export default How;
