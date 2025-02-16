"use client";

import WidgetCard from "@core/components/cards/widget-card";
import { Title, Text, Badge } from "rizzui";
import cn from "@core/utils/class-names";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useMedia } from "@core/hooks/use-media";
import { CustomTooltip } from "@core/components/charts/custom-tooltip";
import TrendingUpIcon from "@core/components/icons/trending-up";
import SimpleBar from "@core/ui/simplebar";
import { useTranslations } from "next-intl";

const data = [
  {
    month: "Jan",
    study001: 5000,
    study002: 1500,
  },
  {
    month: "Feb",
    study001: 8500,
    study002: 5798,
  },
  {
    month: "Mar",
    study001: 7000,
    study002: 3000,
  },
  {
    month: "Apr",
    study001: 3908,
    study002: 6798,
  },
  {
    month: "May",
    study001: 4890,
    study002: 1500,
  },
  {
    month: "Jun",
    study001: 8000,
    study002: 7800,
  },
  {
    month: "Jul",
    study001: 8500,
    study002: 2500,
  },
  {
    month: "Aug",
    study001: 3780,
    study002: 9908,
  },
  {
    month: "Sep",
    study001: 7800,
    study002: 8500,
  },
  {
    month: "Oct",
    study001: 5780,
    study002: 7208,
  },
  {
    month: "Nov",
    study001: 4780,
    study002: 2930,
  },
  {
    month: "Dec",
    study001: 7500,
    study002: 9000,
  },
];

function CustomYAxisTick({ x, y, payload }: any) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        className="fill-gray-500"
      >
        {`${payload.value.toLocaleString()}`}
      </text>
    </g>
  );
}

export default function StudiesReport({ className }: { className?: string }) {
  const isMobile = useMedia("(max-width: 768px)", false);
  const isDesktop = useMedia("(max-width: 1440px)", false);
  const is2xl = useMedia("(max-width: 1780px)", false);
  const isTablet = useMedia("(max-width: 800px)", false);
  const t = useTranslations("common");

  return (
    <WidgetCard
      title={t("text-total-studies")}
      titleClassName="font-normal text-gray-700 sm:text-base font-inter"
      description={
        <div className="flex items-center justify-start">
          <Title
            as="h2"
            className="me-2 font-semibold"
          >
            105,000
          </Title>
          <Text className="flex items-center leading-none text-gray-500">
            <Text
              as="span"
              className={cn("me-2 inline-flex items-center font-medium text-green")}
            >
              <TrendingUpIcon className="me-1 h-4 w-4" />
              32.40%
            </Text>
            {t("text-last-year")}
          </Text>
        </div>
      }
      descriptionClassName="text-gray-500 mt-1.5"
      action={
        <div className="hidden @2xl:block">
          <Badge
            renderAsDot
            className="me-0.5 bg-[#282ECA]"
          />{" "}
          Study 001
          {/* <Badge
            renderAsDot
            className="me-0.5 ms-4 bg-[#4052F6]"
          />{" "}
          Video */}
          <Badge
            renderAsDot
            className="me-0.5 ms-4 bg-[#96C0FF]"
          />{" "}
          Study 002
          {/* <Badge
            renderAsDot
            className="me-0.5 ms-4 bg-[#DEEAFC] dark:bg-[#7c88b2]"
          />{" "}
          {t("text-music")} */}
        </div>
      }
      className={className}
    >
      <SimpleBar>
        <div className="h-96 w-full pt-9">
          <ResponsiveContainer
            width="100%"
            height="100%"
            {...(isTablet && { minWidth: "700px" })}
          >
            <BarChart
              data={data}
              barSize={isMobile ? 16 : isDesktop ? 28 : is2xl ? 32 : 46}
              margin={{
                left: 16,
              }}
              className="[&_.recharts-tooltip-cursor]:fill-opacity-20 dark:[&_.recharts-tooltip-cursor]:fill-opacity-10 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500 [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0"
            >
              <CartesianGrid
                strokeDasharray="8 10"
                strokeOpacity={0.435}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={<CustomYAxisTick />}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="study001"
                fill="#282ECA"
                stackId="a"
              />
              {/* <Bar
                dataKey="video"
                stackId="a"
                fill="#4052F6"
              /> */}
              <Bar
                dataKey="study002"
                stackId="a"
                fill="#96C0FF"
              />
              {/* <Bar
                dataKey="music"
                stackId="a"
                fill="#DEEAFC"
              /> */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
