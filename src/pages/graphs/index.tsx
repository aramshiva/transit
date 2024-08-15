import { useState, useEffect } from "react";
import useSWR from "swr";

export default function Frequency() {
    const [fetchedData, setFetchedData] = useState([]);
    const id = "1_75403";
    const time = "1723763032025";
    const minutesAfter = 1000;
    const minutesBefore = 1000;

    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const { data } = useSWR(`/api/pugetsound/graphs/arrivals-and-departures?id=${id}&time=${time}&minutesAfter=${minutesAfter}&minutesBefore=${minutesBefore}`, fetcher);

    useEffect(() => {
        if (data && data.data && data.data.entry && data.data.entry.arrivalsAndDepartures) {
            setFetchedData(data.data.entry.arrivalsAndDepartures);
        }
    }, [data]);

    const dataLength = fetchedData.length;

    return (
        <>
            <div>{JSON.stringify(dataLength)}</div>
        </>
    );
}
