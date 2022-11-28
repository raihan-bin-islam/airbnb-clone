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
  const limit = 10;
  const cursor = req.query?.cursor;
  let lastIndex: number;
  let results;
  if (cursor) {
    const indexOfCursor = sortedData.findIndex(
      ({ id }) => id === Number(cursor)
    );
    lastIndex = indexOfCursor + limit;
    results = sortedData.filter(
      (data, index) => index >= indexOfCursor && index <= lastIndex
    );
  } else {
    results = sortedData.filter((data, index) => index <= limit);
    lastIndex = limit;
  }

  const hasMore = results.length === limit + 1;
  let nextCursor = null;

  if (hasMore) {
    const { id } = results[results.length - 1];
    nextCursor = id;
    results.pop();
  }

  res.status(200).send({
    data: results,
    after: nextCursor,
  });
}
