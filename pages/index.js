import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Head>
        <title>Partage ton idée</title>
        <meta name="description" content="Toi aussi viens poser ton idée" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="h-screen bg-[url('../src/assets/images/dream-big.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="text-center text-xl pt-48 font-bold align-baseline">
          <div className='bg-white/50 w-9/12 h-auto pb-10 m-auto shadow-sm rounded-md'>
            <h1 className='pt-5'>Hello ! 👋</h1>
            <p className="w-9/12 m-auto pt-20 text-justify">
              Tu as plein d' idées en tête que tu voudrais partager ? <br />
              En panne d'inspiration, tu cherches une bonne idée ? <br />
              Sur Pose Ton Idée, tu retrouveras des idées classées par thème et
              postés par nos utilisateurs <br />
              Que tu sois un inventeur en panne d'inspiration ou un grand
              imaginatif, ce site est fait pour toi !
            </p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
