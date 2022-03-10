// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default  function update(req, res) {
    const { id, isLiked } = req.body;
    console.log(req.body)
  const data =  notion.pages.update({
    page_id: id,
    properties: {
      likes: {
        number : isLiked+1,
      },
    },
  });
  res.send(data)
}
