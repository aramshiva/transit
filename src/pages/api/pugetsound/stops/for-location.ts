// Search for stops near a specific location, optionally by stop code.

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id, longitude, latitude } = req.query;
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/where/stops-for-location.json/${id}.json?key=${process.env.NEXT_PUBLIC_ONEBUSAWAY_API_KEY}&lat=${latitude}&lon=${longitude}`,
  );
  const stops = await response.json();

  res.status(200).json(stops);
}
