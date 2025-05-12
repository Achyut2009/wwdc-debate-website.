"use client"
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
    <main className="flex-1 flex-col">
      <div className="container h-full flex">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
        <div className="flex items-start justify-center z-20  max-w-6xl">
          <div className=" pt-28 ">
            <div className="flex items-center justify-center gap-x-5 max-w-4xl">
              <Image
                src="https://cdn.aayus.me/uploads/dpsmisdebatclub.png"
                alt="DPS Modern Indian School Debate Club"
                height={100}
                width={100}
                className="aspect-square"
              />
              <div>
                <h1 className="text-3xl  relative z-50 text-left font-bold leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                  DPS Modern Indian School Debate Club
                </h1>
              </div>
            </div>
            <div className="relative flex z-50 items-center justify-center  ">
              <div className="max-w-4xl pt-8">
                <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
                  DPS MIS Debate Club is a school based debate club run by <Link className="hover:underline" href="https://www.google.com/maps/place/DPS-Modern+Indian+School/@25.1746337,51.6003315,1020m/data=!3m1!1e3!4m6!3m5!1s0x3e45cb8640d5a8ed:0xa73f3e23ca421cdc!8m2!3d25.1745962!4d51.6033152!16s%2Fm%2F012gbshw?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D">DPS
                  Modern Indian School situated in Doha, Qatar </Link>. Over the span of
                  20+ years we have competed and won accolades in multiple
                  national and international tournaments.{" "}
                </p>
                <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
                  {" "}
                  We at DPS Modern Indian School Debate Club aim to empower
                  young minds through the art of debating. This tournament will
                  provide a platform for students to voice out their concerns on
                  matters of deep importance. Not only will this be a learning
                  experience for debaters but also an opportunity to improve
                  their skills of critical thinking and analytical reasoning. We
                  wish to bring the school debating community from all over the
                  world closer, under one platform to spread international
                  brotherhood. <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  With enthusiastic coordinators, ardent directors and an
                  enthralling OrgComm we are presenting you our very own
                  tournament, War of Words Debating Championship 2024.
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  The War of Words Debating Championship 2024 is exclusively for
                  high school students. We have an enthusiastic core lined up to
                  ensure quality competition. We aim to provide high quality
                  adjudication and a competitive tournament to all participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
