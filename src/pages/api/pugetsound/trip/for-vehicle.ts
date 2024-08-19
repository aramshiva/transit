// Get extended trip details for a specific transit vehicle.
// That is, given a vehicle id for a transit vehicle currently
// operating in the field, return extended trips details about
// the current trip for the vehicle.

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/trip-for-vehicle/${id}.json?key=${process.env.NEXT_PUBLIC_ONEBUSAWAY_API_KEY}`,
  );
  const info = await response.json();

  res.status(200).json(info);
}
