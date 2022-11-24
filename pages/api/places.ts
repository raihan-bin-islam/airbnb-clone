// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/places.json";

type Places = {};

const sortedData = data.results.sort(
  ({ id }, { id: secondId }) => id - secondId
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Places>
) {
  const arr = [1, 2, 3];
  const limit = 10;
  const cursor = req.query.cursor;
  let results;

  if (cursor) {
    const findIndexOfCursor = sortedData.findIndex(
      ({ id }) => id === Number(cursor)
    );
    results = sortedData.filter((data, index) => index <= limit);
  }

  res.status(200).send({
    data: results,
    after: cursor,
  });
}

// export async function getData() {
//   const response = await fetch(/* external API endpoint */);
//   const jsonData = await response.json();
//   return jsonData;
// }
