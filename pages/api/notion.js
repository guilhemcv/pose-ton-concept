// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function handler(req, res) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  console.log(response);
  res.status(200).json({ response });
}
