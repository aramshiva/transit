// Get current arrivals and departures for a stop identified by id
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id, time, minutesAfter, minutesBefore } = req.query;
    
    const response = await fetch(`https://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/${id}.json?key=${process.env.ONEBUSAWAY_API_KEY}&time=${time}&minutesAfter=${minutesAfter}&minutesBefore=${minutesBefore}`);
    
    const arrivalsanddepartures = await response.json();
    console.log(response);
    
    res.status(200).json(arrivalsanddepartures);
}