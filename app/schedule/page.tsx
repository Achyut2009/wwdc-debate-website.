"use client";
import { DataTable } from "@/components/datatable";
import Page from "@/components/header";
import { schedule } from "@/data";

export default function About() {
  return (
    <Page title="Schedule" desc="">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-16 flex-col">
        <div>
          <h2 className="my-4 text-2xl font-bold tracking-tight">
            Day 1 - {schedule.day1.date}
          </h2>
          <DataTable data={schedule.day1.time} />
        </div>
        <div>
          <h2 className="my-4 text-2xl font-bold tracking-tight">
            Day 2 - {schedule.day2.date}
          </h2>
          <DataTable data={schedule.day2.time} />
        </div>
        <div>
          <h2 className="my-4 text-2xl font-bold tracking-tight">
            Day 3 - {schedule.day3.date}
          </h2>
          <DataTable data={schedule.day3.time} />
        </div>
      </div>
    </Page>
  );
}
