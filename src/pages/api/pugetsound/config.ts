// Get access to configuration information about the OBA server.

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/where/config.json?key=${process.env.ONEBUSAWAY_API_KEY}`,
  );
  const config = await response.json();

  res.status(200).json(config);
}
