// Get info about a single arrival and departure for a stop.
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id, trip_id, service_date } = req.query;

    if (!id || !trip_id || !service_date) {
        res.status(400).json({ error: 'Missing required parameters' });
        return;
    }

    const response = await fetch(`https://api.pugetsound.onebusaway.org/api/where/arrival-and-departure-for-stop/${id}.json?key=${process.env.ONEBUSAWAY_API_KEY}&tripId=${trip_id}&serviceDate=${service_date}`);
    const arrivalsanddepartures = await response.json();
    
    res.status(200).json(arrivalsanddepartures);
}
