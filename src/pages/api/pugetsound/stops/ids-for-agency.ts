// Retrieve the list of all stops for a particular agency by id.

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/where/stops-ids-for-agency/${id}.json?key=${process.env.ONEBUSAWAY_API_KEY}`,
  );
  const stopIDs = await response.json();

  res.status(200).json(stopIDs);
}
