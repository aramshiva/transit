// Retrieve info for a specific stop by id.

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/where/stop/${id}.json?key=${process.env.NEXT_PUBLIC_ONEBUSAWAY_API_KEY}`,
  );
  const stop = await response.json();

  res.status(200).json(stop);
}
