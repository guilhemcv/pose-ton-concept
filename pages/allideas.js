import axios from 'axios';
import react from 'react';
import { Client } from '@notionhq/client';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Image from 'next/image';
import Coeur from '../src/assets/images/silhouette-de-forme-simple-de-coeur.png';

export default function allideas({ ideas }) {
  const [likes, setLikes] = react.useState();
  const [id, setId] = react.useState();
  const [selectElement, setSelectElement] = react.useState(0);
  const [click, setClick] = react.useState(false);


  const handleClick = (id_id) => {
    setSelectElement(id_id);
  }


  const handleUpdate = async () => {

     await axios({
      method: 'post',
      url: '/api/updatenotion',
      data: {
        id: id,
        isLiked: parseInt(likes),
      },
      validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
    }).catch(error => {
      console.log(error)
    }).then(response => {
        console.log(response)
    });
  };


  return (
    <div className="bg-slate-200">
      <Nav />
      {ideas.map((idea, index) => (
        <div
        key={idea.id}
        className=" flex-wrap mx-8 my-8 text-left basis-2 card rounded-lg w-100 m-5 shadow-xl font-mono hover:bg-slate-50"
        >
          {console.log(index)}
          <h5 className="text-sm lg:text-base" key={idea.id}>
            {idea.properties.Name.title[0].text.content}
          </h5>
          <button
            onClick={() => {
              setLikes(
                idea.properties.likes.number ? idea.properties.likes.number : 0
              );
              setId(idea.id);
              handleUpdate();
              setClick(!click);
              handleClick(idea.id);
            }}
            className="flex mt-3 items-center w-48 hover:animate-bounce"
          >
            <h6 className="mr-1 text-xs text-slate-500 font-sans">
              {selectElement === idea.id ? "Merci" : idea.properties.likes.number}
            </h6>
            <Image src={Coeur} alt="logo coeur" width={10} height={10} />
            <h6 className="ml-1.5 text-xs text-slate-500 active:text-red-800 font-sans">
              J'aime l'idée !
            </h6>
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
