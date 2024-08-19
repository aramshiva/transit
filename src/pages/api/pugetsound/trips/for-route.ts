// Search for active trips for a specific route.

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/trips-for-route/${id}.json?key=${process.env.NEXT_PUBLIC_ONEBUSAWAY_API_KEY}`,
  );
  const details = await response.json();

  res.status(200).json(details);
}
