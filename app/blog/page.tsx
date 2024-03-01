import BlogGallery from "@/components/ui/blog/blog-gallery";
import { notion } from "@/lib/notion";
import { BaseBlock, Role } from "notion-types";

interface CollectionBlock extends BaseBlock {
  is_template?: boolean;
}

export default async function Blog() {
  const rootPageId = "cd107d3119b2423db88db1932007acce";
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

  return <BlogGallery blogs={blogs} recordMap={recordMap} />;
}
