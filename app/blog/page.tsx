import BlogGallery from "@/components/ui/blog/blog-gallery";
import { siteConfig } from "@/config/site";
import { notion } from "@/lib/notion";
import { BaseBlock, Role } from "notion-types";

interface CollectionBlock extends BaseBlock {
  is_template?: boolean;
}

export default async function Blog() {
  const rootPageId = siteConfig.notionPages.blogRootId;
  const recordMap = await notion.getPage(rootPageId);

  const blogs = Object.values(recordMap.block).filter(
    (block: { role: Role; value: CollectionBlock }) =>
      block.value.type === "page" && block.value?.is_template !== true,
  );

  return <BlogGallery blogs={blogs} recordMap={recordMap} />;
}
