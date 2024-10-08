// Search for active trips near a specific location.

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id, longitude, latitude, longitudeSpan, latitudeSpan } = req.query;
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/where/stops-for-location.json/${id}.json?key=${process.env.NEXT_PUBLIC_ONEBUSAWAY_API_KEY}&lat=${latitude}&lon=${longitude}&latSpan=${latitudeSpan}&lonSpan=${longitudeSpan}`,
  );
  const stops = await response.json();

  res.status(200).json(stops);
}
