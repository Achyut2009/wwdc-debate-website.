"use client"
import Image from "next/image";

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
                  Tournament Guidelines
                </h1>
              </div>
            </div>
            <div className="relative flex z-50 items-center justify-center  ">
              <div className="max-w-4xl pt-8">
                <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
                  -All the rounds are IMPROMPTU{" "}
                </p>
                <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
                  {" "}
                  -Tabby cat can be used to view the draw, motions, standings, and physical
                  ballots/feedback. 
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -The tournament will comprise of 4 preliminary rounds, and a break to the out-rounds
                  starting from the Octo-Finals.
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -After the preliminary rounds, from the 16 teams that break to the Octo finals, the top 8
                  teams will select their Octo final opponents from the other 8 teams. This aims to add a
                  strategic layer to the tournament and increase competitive excitement.
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -The tournament will follow the Qatar Debate Format, with 6 substantive speeches
                  followed by 2 reply speeches. Preliminary Round substantive speeches will be 6 mins in
                  length, while replies will be 4 mins. 
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -Points Of Information (POIs) can be offered between the first and last minute of every
                  substantive speech.
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -Each team must comprise of 3 debaters. 
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -Judge Rule: N=1.
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -Debaters must debate all rounds during the preliminary rounds to qualify for speaker
                  awards.
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -Only the debaters can prepare together during preparation time, debaters should not
                  consult coaches, volunteers, the internet, etc. The use of online resources during
                  preparation is strictly prohibited. 
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -A preparation time of 30 minutes will be given only for the motions.
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -The draw will show you the motion, your side (Proposition/Opposition) and room
                  number before every round. Make sure that you remember which room you are in and
                  your position. If you have forgotten which room you are in, you may double-check with
                  the volunteers/us.
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -Proposition teams will prepare in the debate room assigned; Opposition teams will
                  prepare outside the room. 
                  <p />{" "}
                  <p className="py-4 text-lg text-left leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300"></p>
                  -Only debaters debating in that round are allowed in the Prep. rooms (i.e. no
                  coaches/observers/judges, etc.) during Prep. time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
