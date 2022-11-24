// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../src/data/places.json";

type Places = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Places>
) {
  res.status(200).json(data);
}

// export async function getData() {
//   const response = await fetch(/* external API endpoint */);
//   const jsonData = await response.json();
//   return jsonData;
// }
