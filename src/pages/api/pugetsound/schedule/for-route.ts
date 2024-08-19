// Retrieve the full schedule for a route on a particular day

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/where/schedule-for-stop/${id}.json?key=${process.env.ONEBUSAWAY_API_KEY}`,
  );
  const schedule = await response.json();

  res.status(200).json(schedule);
}
