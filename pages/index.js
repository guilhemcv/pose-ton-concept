
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
        <title>Pose ton concept !</title>
        <meta name="description" content="Toi aussi viens poser ton concept" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="lg:h-screen bg-[url('../src/assets/images/blob-mobile.png')] lg:bg-[url('../src/assets/images/blob.png')] bg-center bg-no-repeat bg-cover">
        <h1 className="pt-10 pb-10 italic font-bold text-center text-l md:text-right md:p-20 sm:p-20 sm:text-2xl">
        &quot;On a toujours une idée en tête... (ou pas...)&quot;
        </h1>
        <div className="flex flex-col justify-around h-auto m-auto  lg:flex-row sm:w-6/12 lg:w-9/12 lg:pl-30 lg:pb-10 lg:pt-24">
          <div className="flex flex-col items-center content-center justify-around h-64 p-3 m-5 rounded-md shadow-md bg-slate-50">
            <p className="pl-5 pr-5 m-auto text-center w-60">
              Tu as plein d&apos;idées en tête que tu voudrais partager ou tu es en
              panne d&apos;inspiration et tu cherches une bonne idée ?
            </p>
            <Image src={Cerveau1} alt="cerveau" width={40} height={40} />
          </div>
          <div className="flex flex-col items-center content-center justify-around h-64 p-3 m-5 rounded-md shadow-md bg-slate-50">
            <p className="pt-4 pl-5 pr-5 m-auto text-center w-60">
              Sur Pose Ton Concept, tu retrouveras des idées classées par thème et
              postées par nos utilisateurs.
            </p>
            <Image src={Cerveau2} alt="cerveau" width={40} height={40} />
          </div>
          <div className="flex flex-col items-center content-center justify-around h-64 p-3 m-5 rounded-md shadow-md bg-slate-50">
            <p className="pt-4 pl-5 pr-5 m-auto text-center w-60">
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
