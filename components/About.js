//import next image
import Image from 'next/image';

//import motion
import { motion } from 'framer-motion';

//import variants
import { fadeInUp, fadeInDown, staggerTextContainer } from '../variants';

const About = ({ aboutData }) => {
  //destructure about data
  const { title, subtitle, text, boyImg } = aboutData;

  return (
    <section className=' mb-[60px] lg:mb-[160px]'>
      <motion.div
        variants={staggerTextContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{ once: false, amount: 0.2 }}
        className='container mx-auto grid lg:grid-cols-2 gap-x-[20px] '>
        {/* Texts */}
        <motion.div
          variants={fadeInDown}
          className='mt-[74px]'>
          <h3 className='h3'>{title}</h3>
          <p className='lead max-w-[470px] mb-[65px]'>{subtitle}</p>
          {/* Text box */}
          <div className=' bg-accent/10 border-l-[10px] border-accent max-w-[540px] p-6 lg:p-8 mb-8 lg:mb-0'>
            <p className=' text-[20px] leading-normal lg:text-[24px] lg:leading-8 font-medium max-w-[320px] lg:max-w-[460px]'>
              {text}
            </p>
          </div>
        </motion.div>
        {/* Image */}
        <motion.div variants={fadeInUp}>
          <Image
            src={boyImg}
            width={575}
            height={480}
            alt='Boy image'
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
