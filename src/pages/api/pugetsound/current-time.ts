// Retrieve the current system time.

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch(`https://api.pugetsound.onebusaway.org/api/where/current-time.json?key=${process.env.ONEBUSAWAY_API_KEY}`);
    const agencies = await response.json();
    
    res.status(200).json(agencies);
}