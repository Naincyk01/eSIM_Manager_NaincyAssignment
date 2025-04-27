import Link from 'next/link';
import { FiGlobe, FiLogOut } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full h-16 py-4 px-4 sm:px-6 flex justify-center items-center"> 
      <div className='max-w-screen-lg w-full flex justify-between items-center p-2.5'> 
        <Link href="/" className="flex items-center text-lg sm:text-xl font-bold text-black ml-2"> 
          <FiGlobe className="mr-2 text-blue-600" size={24} />
          eSIM Manager
        </Link>
        <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800 mr-2">
          <FiLogOut className="mr-2" size={18}/> 
          Logout
        </Link>
      </div>
    </header>
  );
};

export default Header;