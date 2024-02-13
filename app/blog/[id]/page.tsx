import { notion } from "@/lib/notion";

import { NotionPage } from "@/components/notion";

export default async function Blog({ params }: { params: { id: string } }) {
  const pageId = params.id;
  const recordMap = await notion.getPage(pageId);

  return (
    <div>
      <NotionPage recordMap={recordMap} rootPageId={pageId} />
    </div>
  );
}
