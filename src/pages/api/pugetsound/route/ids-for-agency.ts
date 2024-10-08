// Retrieve the list of all route ids for a particular agency.

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/where/route-ids-for-agency/${id}.json?key=${process.env.NEXT_PUBLIC_ONEBUSAWAY_API_KEY}`,
  );
  const routeIDs = await response.json();

  res.status(200).json(routeIDs);
}
