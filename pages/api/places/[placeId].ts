// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data/places.json";

type Places = {};

const sortedData = data.results.sort(
  ({ id }, { id: secondId }) => id - secondId
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Places>
) {
  const { placeId } = req.query;
  const result = sortedData.filter(({ id }) => id === Number(placeId))[0];

  res.status(200).send(result);
}
