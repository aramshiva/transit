// Returns a list of all transit agencies currently supported by OneBusAway along with the center of their coverage area.

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/where/agencies-with-coverage.json?key=${process.env.ONEBUSAWAY_API_KEY}`,
  );
  const agencies = await response.json();

  res.status(200).json(agencies);
}
