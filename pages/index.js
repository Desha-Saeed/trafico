// import components

import { Hero, How, Faq, Testimonials, Footer, Copyright } from '../components';
import AboutComp from '../components/AboutComp';
import HowComp from '../components/HowComp';

// import data
import {
  headerData,
  heroData,
  navData,
  aboutData,
  howData,
  testimonialData,
  footerData,
  faqData
} from '../data.json';
const Home = ({
  headerData,
  heroData,
  navData,
  aboutData,
  howData,
  testimonialData,
  footerData,
  faqData
}) => {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Hero
        heroData={heroData}
        headerData={headerData}
        navData={navData}
      />
      <AboutComp aboutData={aboutData} />
      <HowComp howData={howData} />
      <Faq faqData={faqData} />
      <Testimonials testimonialData={testimonialData} />
      <Footer footerData={footerData} />
      <Copyright />
    </div>
  );
};

// get data.json

export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      aboutData,
      howData,
      testimonialData,
      footerData,
      faqData
    }
  };
};
export default Home;
