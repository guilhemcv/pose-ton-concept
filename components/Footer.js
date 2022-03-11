import Image from 'next/image';
import Link from 'next/link';
import Coffee from '../src/assets/images/Buy_Me_a_Coffee_Logo.png';

function Footer() {
  return (
    <div className="text-center mb-auto sm:flex items-center justify-between p-5 bg-white">
      <div>
        <Link href="https://www.guilhem-seyvet.fr">
          <a target="_blank">
            <h3 className="font-bold mb-3 sm:mb-0 hover:text-red-500">© Guilhem Seyvet - 2022</h3>
          </a>
        </Link>
        <h3 className='mb-4 sm:mb-0'>Made with love ❤️ from Boussay</h3>
      </div>
      <Link href="https://www.buymeacoffee.com/seyem44d">
        <a target="_blank">
          {' '}
          <Image src={Coffee} width={150} height={30} alt="buy me a coffee" />
        </a>
      </Link>
    </div>
  );
}

export default Footer;
