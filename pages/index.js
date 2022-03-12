
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Cerveau1 from "../src/assets/images/cerveau1.png";
import Cerveau2 from "../src/assets/images/cerveau2.png";
import Cerveau3 from "../src/assets/images/cerveau3.png";



export default function Home() {
  return (
    <div className="bg-slate-200">
      <Head>
        <title>Pose ton idée !</title>
        <meta name="description" content="Toi aussi viens poser ton idée" />
        <link rel="icon" href="/favicon.ico" />
        <script async data-api="/sb-api" src="/sb.js"></script>
      </Head>
      <Nav />
      <main className="lg:h-screen bg-[url('../src/assets/images/blob-mobile.png')] lg:bg-[url('../src/assets/images/blob.png')] bg-center bg-no-repeat bg-cover">
        <h1 className="text-center pt-10 text-l pb-10 md:text-right md:p-20 sm:p-20 font-bold italic sm:text-2xl">
        &quot;On à toujours une idée en tête... (ou pas...)&quot;
        </h1>
        <div className=" flex flex-col lg:flex-row justify-around  sm:w-6/12 lg:w-9/12 m-auto h-auto lg:pl-30 lg:pb-10 lg:pt-24">
          <div className="flex flex-col justify-around m-5 items-center content-center bg-slate-50 rounded-md p-3 h-64 shadow-md">
            <p className="m-auto w-60 pl-5 pr-5 text-center">
              Tu as plein d&apos;idées en tête que tu voudrais partager ou tu es en
              panne d&apos;inspiration et tu cherches une bonne idée ?
            </p>
            <Image src={Cerveau1} alt="cerveau" width={40} height={40} />
          </div>
          <div className="flex flex-col justify-around m-5 items-center content-center bg-slate-50 rounded-md p-3 h-64 shadow-md">
            <p className="m-auto w-60 pl-5 pt-4 pr-5 text-center">
              Sur Pose Ton Idée, tu retrouveras des idées classées par thème et
              postées par nos utilisateurs.
            </p>
            <Image src={Cerveau2} alt="cerveau" width={40} height={40} />
          </div>
          <div className="flex flex-col justify-around m-5 items-center content-center bg-slate-50 rounded-md p-3 h-64 shadow-md">
            <p className="m-auto w-60 pr-5 pt-4 pl-5 text-center">
              Que tu sois un inventeur en panne d&apos;inspiration ou un grand
              imaginatif, ce site est fait pour toi !
            </p>
            <Image src={Cerveau3} alt="cerveau" width={40} height={40} />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
