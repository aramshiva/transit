// Retrieve the set of stops serving a particular route,
// including groups by direction of travel.
// The `stops-for-route` method first and foremost provides
// a method for retrieving the set of stops that serve a particular
// route. In addition to the full set of stops, we provide various
// "stop groupings" that are used to group the stops into useful
// collections. Currently, the main grouping provided organizes the
//  set of stops by direction of travel for the route. Finally, this
// method also returns a set of polylines that can be used to draw the
// path traveled by the route.
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const response = await fetch(
    `https://api.pugetsound.onebusaway.org/api/where/stops-for-route/${id}.json?key=${process.env.ONEBUSAWAY_API_KEY}`,
  );
  const stops = await response.json();

  res.status(200).json(stops);
}
