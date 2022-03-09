import { Client } from '@notionhq/client';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function allideas({ ideas }) {
  return (
    <div className="bg-slate-200">
      <Nav />
      <div className=" flex-wrap mx-8 my-8">
        {ideas.map((idea) => (
          <h5
            className="text-center basis-2 card rounded-lg w-100 m-5 shadow-xl font-mono text-sm hover:bg-slate-50"
            key={idea.id}
          >
            {idea.properties.Name.title[0].text.content}
          </h5>
        ))}
      </div>
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
