//import next image
import Image from 'next/image';

//import motion
import { motion } from 'framer-motion';

//import variants for animations
import { fadeInRight, fadeInLeft, staggerTextContainer } from '../variants';
const HowComp = ({ howData }) => {
  //destructure how data
  const { title, subtitle, girlImg } = howData;

  return (
    <section className=' mb-[60px] lg:mb-[160px]'>
      <div className='container mx-auto'>
        {/* grid container */}
        <motion.div
          variants={staggerTextContainer}
          initial='initial'
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.6 }}
          className='grid lg:grid-cols-2 gap-x-10 items-center'>
          {/* image */}
          <motion.div
            variants={fadeInRight}
            className='mb-5 lg:mb-0'>
            <Image
              src={girlImg}
              alt='girl image'
              width={720}
              height={680}
            />
          </motion.div>

          {/* Text */}

          <motion.div
            variants={fadeInLeft}
            className=' max-w-[455px] justify-self-end'>
            <h3 className='h3'>{title}</h3>
            <p className='lead'>{subtitle}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowComp;
