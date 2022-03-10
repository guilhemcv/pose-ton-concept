import { Client } from '@notionhq/client';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Image from 'next/image';
import Coeur from '../src/assets/images/silhouette-de-forme-simple-de-coeur.png';

export default function allideas({ ideas }) {
  return (
    <div className="bg-slate-200">
      <Nav />
        {ideas.map((idea) => (
      <div key={idea.id} className=" flex-wrap mx-8 my-8 text-left basis-2 card rounded-lg w-100 m-5 shadow-xl font-mono hover:bg-slate-50">
          <h5
            className="text-sm lg:text-base"
            key={idea.id}
          >
            {idea.properties.Name.title[0].text.content}
          </h5>
          <button className='flex mt-3 items-center w-48 hover:animate-bounce'>
            <Image src={Coeur} alt="logo coeur" width={10} height={10} />
            <h6 className='ml-1.5 text-xs text-slate-500 font-sans'>J'aime l'idée !</h6>
          </button>
      </div>
        ))}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  return {
    props: {
      ideas: response.results,
    },
  };
}
