import { useState } from 'react';

//import icons
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';

//import motion
import { motion } from 'framer-motion';

//import variants
import { fadeInRight } from '../variants';

const Accordion = ({ accodrion }) => {
  //open questions state
  const [isOpen, setIsOpen] = useState(false);

  //destruct accordion
  const { question, answer } = accodrion;

  return (
    <motion.div
      variants={fadeInRight}
      className=' max-w-[550px]'>
      <div
        className=' drop-shadow-primary bg-white cursor-pointer rounded-xl h-[90px] px-[35px] flex items-center'
        onClick={() => setIsOpen((prevState) => !prevState)}>
        <div className=' w-full flex items-center justify-between'>
          {/* title */}
          <p className='lead font-medium leading-snug max-w-[400px]'>
            {question}
          </p>
          {/* Icons */}
          <div className=' transition-all duration-500'>
            {isOpen ? (
              <motion.div
                initial='initial'
                animate={{ rotate: 180 }}>
                <HiOutlineMinus className='text-[28px] text-accent' />
              </motion.div>
            ) : (
              <motion.div
                initial='initial'
                animate={{ rotate: 0 }}>
                <HiOutlinePlus className='text-[28px] text-accent' />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* answer */}
      <div
        className={`${
          isOpen
            ? 'max-h-[160px] p-8 bg-[#fff7f5] rounded-[10px] drop-shadow-primary my-3'
            : 'max-h-0'
        }  h-[160px] overflow-hidden transition-all`}>
        <p className=' lead leading-[30px] mt-3'>{answer}</p>
      </div>
    </motion.div>
  );
};

export default Accordion;
