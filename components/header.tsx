export default function Page({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 flex-col">
      <div className="container h-full flex">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
        <div className="flex items-start justify-center z-20  max-w-6xl">
          <div className=" pt-20 flex flex-col items-center ">
            <h1 className="text-3xl max-w-6xl relative z-50 text-center font-bold leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              {title}
            </h1>
            <p className="py-5 text-lg text-center leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
              {desc}
            </p>
            <div className="relative flex z-50 items-center justify-center  ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
