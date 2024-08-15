// Retrieve info for a specific transit agency identified by id

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const response = await fetch(`https://api.pugetsound.onebusaway.org/api/where/agency/${id}.json?key=${process.env.ONEBUSAWAY_API_KEY}`);
    const agencies = await response.json();
    
    res.status(200).json(agencies);
}