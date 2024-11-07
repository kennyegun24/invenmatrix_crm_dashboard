"use client";

import * as React from "react";
import { Globe } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeZones = [
  {
    key: 1,
    label: "International Date Line West (UTC-12:00)",
    time: "UTC-12:00",
  },
  {
    key: 2,
    label: "Coordinated Universal Time-11 (UTC-11:00)",
    time: "UTC-11:00",
  },
  { key: 3, label: "Hawaii (UTC-10:00)", time: "UTC-10:00" },
  { key: 4, label: "Alaska (UTC-09:00)", time: "UTC-09:00" },
  {
    key: 5,
    label: "Pacific Time (US & Canada) (UTC-08:00)",
    time: "UTC-08:00",
  },
  {
    key: 6,
    label: "Mountain Time (US & Canada) (UTC-07:00)",
    time: "UTC-07:00",
  },
  {
    key: 7,
    label: "Central Time (US & Canada) (UTC-06:00)",
    time: "UTC-06:00",
  },
  {
    key: 8,
    label: "Eastern Time (US & Canada) (UTC-05:00)",
    time: "UTC-05:00",
  },
  { key: 9, label: "Atlantic Time (Canada) (UTC-04:00)", time: "UTC-04:00" },
  { key: 10, label: "Newfoundland (UTC-03:30)", time: "UTC-03:30" },
  { key: 11, label: "Greenland (UTC-03:00)", time: "UTC-03:00" },
  {
    key: 12,
    label: "Coordinated Universal Time-02 (UTC-02:00)",
    time: "UTC-02:00",
  },
  { key: 13, label: "Azores (UTC-01:00)", time: "UTC-01:00" },
  {
    key: 14,
    label: "Coordinated Universal Time (UTC+00:00)",
    time: "UTC+00:00",
  },
  { key: 15, label: "Central European Time (UTC+01:00)", time: "UTC+01:00" },
  { key: 16, label: "Eastern European Time (UTC+02:00)", time: "UTC+02:00" },
  { key: 17, label: "Moscow Time (UTC+03:00)", time: "UTC+03:00" },
  { key: 18, label: "Tehran (UTC+03:30)", time: "UTC+03:30" },
  { key: 19, label: "Gulf Standard Time (UTC+04:00)", time: "UTC+04:00" },
  { key: 20, label: "Kabul (UTC+04:30)", time: "UTC+04:30" },
  { key: 21, label: "Pakistan Standard Time (UTC+05:00)", time: "UTC+05:00" },
  { key: 22, label: "India Standard Time (UTC+05:30)", time: "UTC+05:30" },
  { key: 23, label: "Nepal Time (UTC+05:45)", time: "UTC+05:45" },
  { key: 24, label: "Bangladesh Standard Time (UTC+06:00)", time: "UTC+06:00" },
  { key: 25, label: "Yangon Time (UTC+06:30)", time: "UTC+06:30" },
  { key: 26, label: "Indochina Time (UTC+07:00)", time: "UTC+07:00" },
  { key: 27, label: "China Standard Time (UTC+08:00)", time: "UTC+08:00" },
  { key: 28, label: "Japan Standard Time (UTC+09:00)", time: "UTC+09:00" },
  {
    key: 29,
    label: "Australian Central Standard Time (UTC+09:30)",
    time: "UTC+09:30",
  },
  {
    key: 30,
    label: "Australian Eastern Standard Time (UTC+10:00)",
    time: "UTC+10:00",
  },
  { key: 31, label: "Magadan Time (UTC+11:00)", time: "UTC+11:00" },
  {
    key: 32,
    label: "New Zealand Standard Time (UTC+12:00)",
    time: "UTC+12:00",
  },
  { key: 33, label: "Tonga Time (UTC+13:00)", time: "UTC+13:00" },
  { key: 34, label: "Line Islands Time (UTC+14:00)", time: "UTC+14:00" },
];

export default function TimeZonePickerDemo({ children }) {
  const [timeZone, setTimeZone] = React.useState();

  return (
    <Popover className="bg-[--blend_bg]">
      <PopoverTrigger asChild>
        {/* <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !timeZone && "text-muted-foreground"
          )}
        > */}
        {children}
        {/* <Globe className="mr-2 h-4 w-4" />
          {timeZone ? timeZone : <span>Pick a time zone</span>} */}
        {/* </Button> */}
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0 bg-[--blend_bg]">
        <Select
          className="bg-[--blend_bg]"
          onValueChange={setTimeZone}
          defaultValue={timeZone}
        >
          <SelectTrigger className="bg-[--blend_bg text-[--light_text]">
            <SelectValue
              placeholder="Select a time zone"
              // className="text-[light_text]"
            />
          </SelectTrigger>
          <SelectContent className="bg-[--blend_bg]">
            {timeZones.map((tz) => (
              <SelectItem key={tz.key} value={tz.time}>
                {tz.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PopoverContent>
    </Popover>
  );
}

const TimeZoneComponent = () => {
  return (
    <TimeZonePickerDemo>
      <div className={`flex justify_between align_center pointer`}>
        <div>
          <h5 className="font-[600] text-[17px]">Time Zone</h5>
          <p className="text-[14px] text-[--light_text]">
            Set the default time zone for your organization.
          </p>
        </div>
      </div>
    </TimeZonePickerDemo>
  );
};

// export default TimeZoneComponent;
