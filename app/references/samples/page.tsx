import Page from "@/components/header";
import { VideoBentoGrid, VideoBentoGridItem } from "@/components/video";
import { samples } from "@/data";

export default function Brief() {
  return (
    <Page
      title="Sample Debates"
      desc="Here are some sample debates you can watch, to gain a better insight. You can watch these debates on Youtube. "
    >
      <VideoBentoGrid className="max-w-8xl mx-auto md:auto-rows-[17rem]">
        {samples.map((item, i) => (
          <VideoBentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            url={item.url}
          />
        ))}
      </VideoBentoGrid>
    </Page>
  );
}
