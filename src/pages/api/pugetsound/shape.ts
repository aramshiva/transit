// Retrieve a shape (the path traveled by a transit vehicle) by id.

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/shape/${id}.json?key=${process.env.NEXT_PUBLIC_ONEBUSAWAY_API_KEY}`,
  );
  const shape = await response.json();

  res.status(200).json(shape);
}
