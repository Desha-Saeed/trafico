//import link
import Link from 'next/link';

const Nav = ({ headerState, navData }) => {
  return (
    <nav className='flex items-center'>
      <ul className=' flex gap-[96px]'>
        {navData.map((item, idx) => {
          //destructure nav data
          const { name, href } = item;

          return (
            <li key={idx}>
              <Link href={href}>
                <a
                  className={`${
                    headerState ? 'text-primary' : 'text-white'
                  } cursor-pointer hover:text-accent-hover`}>
                  {' '}
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
