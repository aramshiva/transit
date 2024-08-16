import { useEffect, useState } from "react";
import axios from "axios";
import Map, { HeatmapLayer } from "react-map-gl";

export default function Mapbox() {
    const [heatmapData, setHeatmapData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const startOfJune = 1719859200000; // epoch for june 1
            const id = "40_99913"; // angle lake station id
            const endOfJune = 1722451199000; // epoch for june 30
            const data = [];

            for (let day = startOfJune; day <= endOfJune; day += 86400000) {
                // 86400000 ms in a day
                const response = await axios.get(`/api/pugetsound/graphs/arrivals-and-departures?id=${id}&time=${day}&minutesAfter=1440&minutesBefore=0`)
                data.push(response.data);
            }
            
            const positions = [];

            data.forEach((day) => {
                day.data.entry.arrivalsAndDepartures.forEach((train) => {
                    if (train.tripStatus && train.tripStatus.position) {
                        positions.push([
                            train.tripStatus.position.lon,
                            train.tripStatus.position.lat,
                        ]);
                    }
                });
            });

            setHeatmapData(positions);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Map
                initialViewState={{
                    longitude: -122.296692,
                    latitude: 47.445053,
                    zoom: 12,
                }}
                style={{ width: "100%", height: "100vh" }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            >
                {heatmapData.length > 0 && (
                    <HeatmapLayer
                        id="train-heatmap"
                        data={{
                            type: "FeatureCollection",
                            features: heatmapData.map(([lon, lat]) => ({
                                type: "Feature",
                                geometry: {
                                    type: "Point",
                                    coordinates: [lon, lat],
                                },
                            })),
                        }}
                        intensity={10}
                        radius={20}
                        maxZoom={15}
                    />
                )}
            </Map>
        </div>
    );
}
