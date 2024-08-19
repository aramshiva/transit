"use client";

import { TrendingUp } from "lucide-react";
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

const fetchVehicles = async () => {
  return {
    20: await fetch(
      "http://localhost:3000/api/pugetsound/vehicles/for-agency?id=20",
    ).then((response) => response.json()),
    23: await fetch(
      "http://localhost:3000/api/pugetsound/vehicles/for-agency?id=23",
    ).then((response) => response.json()),
    3: await fetch(
      "http://localhost:3000/api/pugetsound/vehicles/for-agency?id=3",
    ).then((response) => response.json()),
    29: await fetch(
      "http://localhost:3000/api/pugetsound/vehicles/for-agency?id=29",
    ).then((response) => response.json()),
    19: await fetch(
      "http://localhost:3000/api/pugetsound/vehicles/for-agency?id=19",
    ).then((response) => response.json()),
    95: await fetch(
      "http://localhost:3000/api/pugetsound/vehicles/for-agency?id=95",
    ).then((response) => response.json()),
    40: await fetch(
      "http://localhost:3000/api/pugetsound/vehicles/for-agency?id=40",
    ).then((response) => response.json()),
    96: await fetch(
      "http://localhost:3000/api/pugetsound/vehicles/for-agency?id=96",
    ).then((response) => response.json()),
    97: await fetch(
      "http://localhost:3000/api/pugetsound/vehicles/for-agency?id=97",
    ).then((response) => response.json()),
    1: await fetch(
      "http://localhost:3000/api/pugetsound/vehicles/for-agency?id=1",
    ).then((response) => response.json()),
  };
};

const fetchVehiclesData = async () => {
  const vehicles = await fetchVehicles();
  // const chartData = [
  //   { name: "Metro Transit", vehicles: vehicles[1]["data"]["list"].length },
  //   { name: "Seattle Streetcar", vehicles: vehicles[23]["data"]["list"].length },
  //   { name: "Pierce Transit", vehicles: vehicles[3]["data"]["list"].length },
  //   { name: "Community Transit", vehicles: vehicles[29]["data"]["list"].length },
  //   { name: "Intercity Transit", vehicles: vehicles[19]["data"]["list"].length },
  //   { name: "Washington State Ferries", vehicles: vehicles[95]["data"]["list"].length },
  //   { name: "Sound Transit", vehicles: vehicles[40]["data"]["list"].length },
  //   { name: "Seattle Center Monorail", vehicles: vehicles[96]["data"]["list"].length },
  //   { name: "Everett Transit", vehicles: vehicles[97]["data"]["list"].length },
  //   { name: "Kitsap Transit", vehicles: vehicles[20]["data"]["list"].length },
  // ];
  const chartData = [
    { name: "Metro Transit", vehicles: vehicles[1]?.data?.list?.length ?? 0 },
    {
      name: "Seattle Streetcar",
      vehicles: vehicles[23]?.data?.list?.length ?? 0,
    },
    { name: "Pierce Transit", vehicles: vehicles[3]?.data?.list?.length ?? 0 },
    {
      name: "Community Transit",
      vehicles: vehicles[29]?.data?.list?.length ?? 0,
    },
    {
      name: "Intercity Transit",
      vehicles: vehicles[19]?.data?.list?.length ?? 0,
    },
    {
      name: "Washington State Ferries",
      vehicles: vehicles[95]?.data?.list?.length ?? 0,
    },
    { name: "Sound Transit", vehicles: vehicles[40]?.data?.list?.length ?? 0 },
    {
      name: "Seattle Center Monorail",
      vehicles: vehicles[96]?.data?.list?.length ?? 0,
    },
    {
      name: "Everett Transit",
      vehicles: vehicles[97]?.data?.list?.length ?? 0,
    },
    { name: "Kitsap Transit", vehicles: vehicles[20]?.data?.list?.length ?? 0 },
  ];

  chartData.sort((a, b) => b.vehicles - a.vehicles);

  return chartData;
};

const chartData = await fetchVehiclesData();
export { chartData };

const chartConfig = {
  vehicles: {
    label: "Vehicles",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Agencies() {
  return (
    <>
      <div className="max-h-screen">
        <Card>
          <CardHeader>
            <CardTitle>
              Vehicles per Agency{" "}
              <span className="text-red-600 font-bold">LIVE</span>
            </CardTitle>
            <CardDescription>
              Amount of vehicles per each transit agency operating right now in
              the puget sound.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={20}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 20)}
                />
                <ChartTooltip
                  cursor={true}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="vehicles"
                  fill="var(--color-vehicles)"
                  radius={5}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
