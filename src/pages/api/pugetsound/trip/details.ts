import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const response = await fetch(`https://api.pugetsound.onebusaway.org/api/trip-details/${id}.json?key=${process.env.ONEBUSAWAY_API_KEY}`);
    const details = await response.json();
    
    res.status(200).json(details);
}
