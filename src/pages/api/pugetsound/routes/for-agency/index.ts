// Retrieve the list of all routes for a particular agency by id.

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const response = await fetch(`https://api.pugetsound.onebusaway.org/api/where/routes-for-agency/${id}.json?key=${process.env.ONEBUSAWAY_API_KEY}`);
    const routes = await response.json();
    
    res.status(200).json(routes);
}