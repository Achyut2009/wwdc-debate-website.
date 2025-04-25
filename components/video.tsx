'use client'

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import ReactPlayer from 'react-player/lazy'

export const VideoBentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[15rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const VideoBentoGridItem = ({
  className,
  title,
  description,
  url,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  url: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input  dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-zinc-300  justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div>
        <ReactPlayer width={318} height={179}  url={url} />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <Link href={url}> <Button variant={"geist"} >Watch on Youtube</Button></Link>
      </div>
    </div>
  );
};
