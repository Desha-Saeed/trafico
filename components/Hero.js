//import next image
import Image from 'next/image';

//import componenets
import Header from './Header';

//import motion
import { motion } from 'framer-motion';

//import variants
import {
  boyAnim,
  girlAnim,
  heroTruckAnim,
  staggerContainer,
  fadeInDown
} from '../variants';

import { CgArrowLongRight } from 'react-icons/cg';

const Hero = ({ heroData, headerData, navData }) => {
  //destructure hero data
  const { title, boyImg, girlImg, truckImg, btnText } = heroData;
  return (
    <section className='bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80'>
      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        className='container mx-auto min-h-[800px] lg:min-h-[950px] relative'>
        {/* Header */}
        <motion.div variants={fadeInDown}>
          <Header
            headerData={headerData}
            navData={navData}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeInDown}
          className='h1 max-w-[740px] text-white pt-[12rem] mb-[60px]'>
          {title}
        </motion.h1>
        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05
          }}
          variants={fadeInDown}
          className='btn'>
          {btnText}
          <CgArrowLongRight className=' text-[30px]' />
        </motion.button>
        {/* Girl image */}
        <motion.div
          variants={girlAnim}
          className='hidden lg:flex absolute bottom-0 '>
          <Image
            src={girlImg}
            alt='girl image'
            width={206}
            height={495}
          />
        </motion.div>
        {/* Truck image */}
        <motion.div
          variants={heroTruckAnim}
          className='hidden lg:flex absolute -bottom-[25%] -left-[30%]'>
          <Image
            src={truckImg}
            alt='truck image'
            width={811}
            height={395}
          />
        </motion.div>
        {/* Boy image */}
        <motion.div
          variants={boyAnim}
          className='hidden lg:flex absolute bottom-0 right-[380px] z-10'>
          <Image
            src={boyImg}
            alt='boy image'
            width={206}
            height={495}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
