//import components
import Slider from './Slider';

//import motion
import { motion } from 'framer-motion';

//import variants
import { staggerTextContainer, fadeInUp } from '../variants';
const Testimonials = ({ testimonialData }) => {
  //destrust testimonial Data

  const { pretitle, title, clients } = testimonialData;

  return (
    <section className='relative min-h-[600px] mb-[60px] lg:mb-[160px] '>
      {/* container */}
      <div className=' container mx-auto '>
        {/* Flex container */}
        <motion.div
          variants={staggerTextContainer}
          initial='initial'
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex flex-col lg:flex-row'>
          {/* Text */}
          <motion.div
            variants={fadeInUp}
            className=' lg:w-[40%]'>
            <h3 className=' h3'>{pretitle}</h3>
            <h2 className='h2 mb-6'>{title}</h2>
          </motion.div>

          {/* Slider */}

          <motion.div
            variants={fadeInUp}
            className=' lg:absolute lg:w-[60%] lg:right-0'>
            <Slider clients={clients} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
