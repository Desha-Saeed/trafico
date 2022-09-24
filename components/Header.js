//import hooks
import { useState, useEffect } from 'react';

//import next image, link
import Image from 'next/image';
import Link from 'next/link';

//import components and icons
import Nav from './Nav';
import NavMobile from './NavMobile';
import { HiMenu } from 'react-icons/hi';

const Header = ({ headerData, navData }) => {
  //destructure header data
  const { logoImgV1, logoImgV2, btnText } = headerData;
  //destructure navData
  const { name, href } = navData;

  // header states
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      //set header state according to scrolled position

      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  }, [header]);

  return (
    <header
      className={` ${
        header ? ' bg-white p-3 rounded-md drop-shadow-primary' : ' py-[40px]'
      } fixed left-0 right-0 w-full mx-auto max-w-[90vw] lg:max-w-[1120px] z-20 transition-all duration-500 flex justify-between items-center `}>
      {/* Logo */}
      <Link href={'/'}>
        <a>
          <Image
            src={`${header ? logoImgV2 : logoImgV1}`}
            alt='logo image'
            width={header ? 180 : 215}
            height={50}
          />
        </a>
      </Link>
      {/* Large screens Nav and button initially hidden */}
      <div className='hidden lg:flex gap-x-[95px]'>
        <Nav
          headerState={header}
          navData={navData}
        />
        {/* Contact Button */}
        <button className='btn'>{btnText}</button>
      </div>
      {/* Nav menu button on mobile , hide on large screens */}
      <div className='lg:hidden cursor-pointer'>
        <HiMenu
          onClick={() => setNavMobile((prevState) => !prevState)}
          className=' text-4xl text-accent-hover'
        />
      </div>
      {/* Nav Mobile - hide on large screens */}
      <div
        className={`${
          navMobile ? 'max-h-[160px]' : 'max-h-0'
        } lg:hidden absolute top-full w-full left-0 mt-2 rounded-md overflow-hidden shadow-2xl transition-all `}>
        <NavMobile navData={navData} />
      </div>
    </header>
  );
};

export default Header;
