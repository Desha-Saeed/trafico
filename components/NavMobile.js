//import next link
import Link from 'next/link';

const NavMobile = ({ navData }) => {
  return (
    <div className=' bg-accent w-full p-4'>
      {/* Nav Links */}
      <ul className='flex flex-col gap-y-6'>
        {navData.map((item, idx) => {
          const { name, href } = item;

          return (
            <li key={idx}>
              <Link href={href}>
                <a className=' text-white hover:text-accent-hover'> {name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMobile;
