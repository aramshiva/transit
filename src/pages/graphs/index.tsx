import { useState, useEffect } from "react";
import useSWR from "swr";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function Frequency() {
  const [fetchedData, setFetchedData] = useState([]);
  const id = "40_99913"; // angle lake station id
  const time = "1723763032025";
  const minutesBefore = 1440; // 24 hours

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR(
    `/api/pugetsound/graphs/arrivals-and-departures?id=${id}&time=${time}&minutesAfter=0&minutesBefore=${minutesBefore}`,
    fetcher
  );

  useEffect(() => {
    if (
      data &&
      data.data &&
      data.data.entry &&
      data.data.entry.arrivalsAndDepartures
    ) {
      setFetchedData(data.data.entry.arrivalsAndDepartures);
    }
  }, [data]); // get data

  const dataLength = fetchedData.length;
  const arrivalsData = fetchedData.filter((item) => item.departureEnabled);
  const arrivalsDataLength = arrivalsData.length;
  const departuresData = fetchedData.filter((item) => item.departureEnabled);
  const departuresDataLength = departuresData.length;

  const chartData = [
    {
      tag: "Total",
      total: dataLength,
      //   arrivals: arrivalsDataLength,
      //   departures: departuresDataLength,
    },
    {
      tag: "Arrivals",
      total: arrivalsDataLength,
      //   arrivals: arrivalsDataLength,
      //   departures: departuresDataLength,
    },
    {
      tag: "Departures",
      total: departuresDataLength,
      //   arrivals: arrivalsDataLength,
      //   departures: departuresDataLength,
    },
  ];

  const chartConfig = {
    total: {
      label: "Total",
      color: "hsl(var(--chart-1))",
    },
    arrivals: {
      label: "Arrivals",
      color: "hsl(var(--chart-2))",
    },
    departures: {
      label: "Departures",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Arrivals and Departures</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="total" fill="var(--color-total)" radius={2.6} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Data Based off live data from the Angle Lake Link Station.
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total arrivals and departures live data for the last 24
            hours.
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
