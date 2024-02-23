import BlogGallery from "@/components/ui/blog/blog-gallery";
import { notion } from "@/lib/notion";
import { BaseBlock, Role } from "notion-types";

interface CollectionBlock extends BaseBlock {
  is_template?: boolean;
}

export default async function Blog() {
  const rootPageId =
    "1ecf59c6f5c74f25b1a0d91f7c8dbe1c?v=eff4105118c145599b46722e1c99f9d0";
  const recordMap = await notion.getPage(rootPageId);

  const blogs = Object.values(recordMap.block).filter(
    (block: { role: Role; value: CollectionBlock }) =>
      block.value.type === "page" && block.value?.is_template !== true,
  );

  return (
    <div className="flex flex-wrap">
      <BlogGallery blogs={blogs} recordMap={recordMap} />
    </div>
  );
}
