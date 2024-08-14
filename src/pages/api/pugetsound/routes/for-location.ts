import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id, longitude, latitude } = req.query;
    const response = await fetch(`https://api.pugetsound.onebusaway.org/api/where/routes-for-location.json/${id}.json?key=${process.env.ONEBUSAWAY_API_KEY}&lat=${latitude}&lon=${longitude}`);
    const arrivalsanddepartures = await response.json();
    
    res.status(200).json(arrivalsanddepartures);
}
