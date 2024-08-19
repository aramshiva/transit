// Submit a user-generated problem report for a particular stop.
// The reporting mechanism provides lots of fields that can be
// specified to give more context about the details of the problem
// (which trip, stop, vehicle, etc was involved), making it easier
// for a developer or transit agency staff to diagnose the problem.
// These reports feed into the problem reporting admin interface.

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id, code, comment } = req.query;

  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/where/report-problem-with-stop/${id}.json?key=${process.env.ONEBUSAWAY_API_KEY}&userComment=${comment}&code=${code}`,
  );
  const arrivalsanddepartures = await response.json();

  res.status(200).json(arrivalsanddepartures);
}
