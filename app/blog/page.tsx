import BlogGallery from "@/components/ui/blog/blog-gallery";
import { notion } from "@/lib/notion";
import { BaseBlock, Role } from "notion-types";
import { getAllPagesInSpace } from "notion-utils";

interface CollectionBlock extends BaseBlock {
  is_template?: boolean;
}

export default async function Blog() {
  const rootPageId = "1ecf59c6f5c74f25b1a0d91f7c8dbe1c";
  const recordMap = await notion.getPage(rootPageId);

  const blogs = Object.values(recordMap.block).filter(
    (block: { role: Role; value: CollectionBlock }) =>
      block.value.type === "page" && block.value?.is_template !== true,
  );

  const paths = blogs.map((blog) => {
    return {
      id: blog.value.id,
    };
  });

  console.log(paths);

  return (
    <div className="flex flex-wrap">
      <BlogGallery blogs={blogs} recordMap={recordMap} />
    </div>
  );
}
