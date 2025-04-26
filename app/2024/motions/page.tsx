import Page from "@/components/header";
import { twentythree } from "@/data";

export default function Brief() {
  return (
    <Page title="War of Words Debating Championship 2023" desc="">
      <section className="w-full pb-12 md:pb-24 lg:pb-32 bg-transparent ">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Motions
            </h2>
            <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
              The Motions for the War of Words Debating Championship 2023.
            </p>
          </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {twentythree.motions.map((motion, idx) => (
              <div
              key={idx}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
              <h3 className="text-lg font-medium">{motion.title}</h3>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">{motion.body}</p>
              </div>
            ))}
           
          </div>
        </div>
      </section>
    </Page>
  );
}
