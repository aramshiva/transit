import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch(`https://api.pugetsound.onebusaway.org/api/where/config.json?key=${process.env.ONEBUSAWAY_API_KEY}`);
    const arrivalsanddepartures = await response.json();
    
    res.status(200).json(arrivalsanddepartures);
}