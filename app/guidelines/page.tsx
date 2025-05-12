import { motions } from "@/data";

export default function Brief() {
  return (
    <div className="flex-col flex-1">
    <section className="w-full pb-12 md:pb-24 lg:pb-32 bg-transparent ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
      <div className="container relative z-20 pt-20 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Motions
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
            The Motions for the War of Words Debating Championship 2024.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {motions.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
