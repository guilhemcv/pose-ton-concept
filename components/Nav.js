import Image from 'next/image';
import Link from 'next/link';
import Logo from '../src/assets/images/logo-light.png';

function Nav() {
  return (
    <div>
      <nav className="md:flex align-baseline bg-white ">
        <div className="md:w-1/3 w-auto text-center m-auto">
          <Link href="/">
              <a><Image src={Logo} alt="ampoule" width={150} height={150} /></a>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row align-middle sm:content-center p-3 md:w-2/3 justify-around md:m-auto text-xs md:text-sm lg:text-lg  sm:pb-10 md:pb-0">
          <h3 className="align-middle italic h-12 m-auto md:w-64 w-auto">
            <Link href="/allideas">
              <a className="align-middle w-64 bg-button hover:bg-black hover:text-button p-3 rounded ">
                Toutes les idées
              </a>
            </Link>
          </h3>
          <h3 className="align-middle h-12 italic m-auto md:w-64">
            <Link href="/pages/allideas.js">
              <a className="align-middle md:w-64 bg-button hover:bg-black hover:text-button p-3 rounded">
                Idées par Thème
              </a>
            </Link>
          </h3>
          <h3 className="align-middle h-12 italic m-auto md:w-64">
            <Link href="https://docs.google.com/forms/d/1WtvKW-i0Tpw1wgf-YcRu1MHGeFQYKUkB1XITYIHyOC4/prefill">
              <a
                className="align-middle bg-button hover:bg-black hover:text-button p-3 rounded w-64"
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