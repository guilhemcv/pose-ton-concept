import { Client } from '@notionhq/client';
import Head from 'next/head';
import axios from 'axios';
import react from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Image from 'next/image';
import Coeur from '../src/assets/images/silhouette-de-forme-simple-de-coeur.png';
export default function technologie({ ideas }) {
  const [likes, setLikes] = react.useState();
  const [id, setId] = react.useState();
  const [selectElement, setSelectElement] = react.useState(0);
  const [click, setClick] = react.useState(false);
  const [value, setValue] = react.useState('');


  const handleClick = (id_id) => {
    setSelectElement(id_id);
  };

  const handleUpdate = async () => {
    await axios({
      method: 'post',
      url: '/api/updatenotion',
      data: {
        id: id,
        isLiked: parseInt(likes),
      },
      validateStatus: (status) => {
        return true; 
      },
    })
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
      });
  };

  return (
    <div className="bg-slate-200">
      <Head>
        <title>Pose ton concept !</title>
        <meta name="description" content="Toi aussi viens poser ton concept" />
        <link rel="icon" href="/favicon.ico" />
        <script async data-api="/sb-api" src="/sb.js"></script>
      </Head>
      <Nav />
      <main className="h-full">
        <div className='flex justify-center'>
          <select
            className="h-10 p-2 mt-10 rounded-lg w-72"
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="">Choisir une catégorie :</option>
            <option value="">Toutes les idées</option>
            <option value="technologie">Technologie</option>
            <option value="applications">Applications</option>
            <option value="invention">Invention</option>
            <option value="nourriture">Nourriture</option>
            <option value="transports">Transports</option>
            <option value="santé">Santé</option>
          </select>
        </div>
        {ideas.map((idea) => {
          if (value === '') {
            return (
              <div
                key={idea.id}
                className="flex-wrap w-11/12 mx-8 my-8 ml-auto mr-auto font-mono text-left rounded-lg shadow-xl basis-2 card xl:w-8/12 hover:bg-slate-50"
              >
                <h5 className="text-sm lg:text-base" key={idea.id}>
                  {idea.properties.Name.title[0].text.content}
                </h5>
                <div className="flex items-center justify-between mt-3">
                  <button
                    onClick={() => {
                      setLikes(
                        idea.properties.likes.number
                          ? idea.properties.likes.number
                          : 0
                      );
                      setId(idea.id);
                      handleUpdate();
                      setClick(!click);
                      handleClick(idea.id);
                    }}
                    className="flex items-center w-48 hover:animate-bounce"
                  >
                    <h6 className="mr-1 font-sans text-xs text-slate-500">
                      {selectElement === idea.id
                        ? 'Merci'
                        : idea.properties.likes.number}
                    </h6>
                    <Image
                      src={Coeur}
                      alt="logo coeur"
                      width={10}
                      height={10}
                    />
                    <h6 className="ml-1.5 text-xs text-slate-500 active:text-red-800 font-sans">
                      J&apos;aime l&apos;idée !
                    </h6>
                  </button>
                  <div className='flex'>
                  {idea.properties.categorie.multi_select.map((cat) => {
                    return (
                      <h6
                        key={cat.name}
                        className="p-1 mr-3 font-sans text-xs text-white rounded-sm bg-cyan-500"
                      >
                        {cat.name}
                      </h6>
                    );
                  })}
                  </div>
                </div>
              </div>
            );
          }
          
           if (idea.properties.categorie.multi_select[0].name === value) {
            return (
              <div
                key={idea.id}
                className="flex-wrap w-11/12 mx-8 my-8 ml-auto mr-auto font-mono text-left rounded-lg shadow-xl basis-2 card xl:w-8/12 hover:bg-slate-50"
              >
                <h5 className="text-sm lg:text-base" key={idea.id}>
                  {idea.properties.Name.title[0].text.content}
                </h5>
                <div className="flex items-center justify-between mt-3">
                  <button
                    onClick={() => {
                      setLikes(
                        idea.properties.likes.number
                          ? idea.properties.likes.number
                          : 0
                      );
                      setId(idea.id);
                      handleUpdate();
                      setClick(!click);
                      handleClick(idea.id);
                    }}
                    className="flex items-center w-48 hover:animate-bounce"
                  >
                    <h6 className="mr-1 font-sans text-xs text-slate-500">
                      {selectElement === idea.id
                        ? 'Merci'
                        : idea.properties.likes.number}
                    </h6>
                    <Image
                      src={Coeur}
                      alt="logo coeur"
                      width={10}
                      height={10}
                    />
                    <h6 className="ml-1.5 text-xs text-slate-500 active:text-red-800 font-sans">
                      J&apos;aime l&apos;idée !
                    </h6>
                  </button>
                  <div className='flex'>
                  {idea.properties.categorie.multi_select.map((cat) => {
                    return (
                      <h6
                        key={cat.name}
                        className="p-1 mr-3 font-sans text-xs text-white rounded-sm bg-cyan-500"
                      >
                        {cat.name}
                      </h6>
                    );
                  })}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </main>
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
