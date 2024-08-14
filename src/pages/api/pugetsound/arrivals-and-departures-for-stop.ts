// Get current arrivals and departures for a stop identified by id
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const response = await fetch(`https://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/${id}.json?key=${process.env.ONEBUSAWAY_API_KEY}`);
    const arrivalsanddepartures = await response.json();
    
    res.status(200).json(arrivalsanddepartures);
}
