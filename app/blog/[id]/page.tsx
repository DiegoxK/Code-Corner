import { notion } from "@/lib/notion";
import { NotionPage } from "@/components/notion";
import { BaseBlock, Role } from "notion-types";

interface CollectionBlock extends BaseBlock {
  is_template?: boolean;
}
// TODO: Add Cloudinary image hosting
export async function generateStaticParams() {
  const rootPageId = "1ecf59c6f5c74f25b1a0d91f7c8dbe1c";
  const recordMap = await notion.getPage(rootPageId);

  const blogs = Object.values(recordMap.block).filter(
    (block: { role: Role; value: CollectionBlock }) =>
      block.value.type === "page" && block.value?.is_template !== true,
  );

  return blogs.map((blog) => {
    return {
      id: blog.value.id,
    };
  });
}

export default async function Blog({ params }: { params: { id: string } }) {
  const pageId = params.id;
  const recordMap = await notion.getPage(pageId);

  return (
    <div>
      <NotionPage recordMap={recordMap} rootPageId={pageId} />
    </div>
  );
}
