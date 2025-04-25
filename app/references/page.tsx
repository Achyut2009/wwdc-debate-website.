import { BentoGrid, BentoGridItem } from "@/components/bento";
import Page from "@/components/header";
import { references } from "@/data";

export default function Reference() {
  return (
    <Page
      title="Other References"
      desc="You can access different presentations here"
    >
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {references.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            url={item.url}
          />
        ))}
      </BentoGrid>
    </Page>
  );
}
