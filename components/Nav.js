import Image from 'next/image';
import Link from 'next/link';
import Logo from '../src/assets/images/logo-light.png';

function Nav() {
  return (
    <div>
      <nav className="md:flex mt-auto align-baseline bg-white ">
        <div className="md:w-1/3 w-auto text-center m-auto">
          <Link href="/">
              <a><Image src={Logo} alt="ampoule" width={150} height={150} /></a>
          </Link>
        </div>
        <div className="flex flex-col align-center items-center first-letter:m-auto md:flex-row md:align-end sm:content-center p-3 md:w-2/3 justify-end md:m-auto text-xs md:text-sm lg:text-lg  sm:pb-10 md:pb-0">
          <h3 className="align-middle italic h-12 md:w-60">
            <Link href="/allideas">
              <a className="align-between w-40 bg-button hover:bg-black hover:text-button pl-4 pr-5 shadow-lg pt-3 pb-3 rounded ">
                Toutes les idées
              </a>
            </Link>
          </h3>
          
          <h3 className="align-middle h-12 italic  md:w-60">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc-n7nqeSoVjZrYKoxuBmaO9oqxH8ucVfDOqgsruqWsSQDxeQ/viewform?usp=sf_link">
              <a
                className="align-middle bg-button hover:bg-black hover:text-button shadow-lg p-3 rounded w-40"
                target="_blank"
              >
                Proposer une idée
              </a>
            </Link>
          </h3>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
