import React from 'react';
//import componenets
import { Faq, Footer, Copyright, Hero } from '../components';
//import data
import {
  headerData,
  heroData,
  navData,
  faqData,
  footerData
} from '../data.json';

function Faqs({ headerData, heroData, navData, faqData, footerData }) {
  return (
    <div>
      <Hero
        heroData={heroData}
        headerData={headerData}
        navData={navData}
      />
      <Faq faqData={faqData} />
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
      faqData,

      footerData
    }
  };
};
export default Faqs;
