import { notion } from "@/lib/notion";
import { Button } from "@/components/ui/button";
import { NotionPage } from "@/components/notion";

export default async function Home() {
  const rootPageId =
    "https://www.notion.so/Fundamentos-de-la-programaci-n-con-Python-243ddea70afe42628e38cc1d4676a9c9?pvs=4";
  const recordMap = await notion.getPage(rootPageId);

  console.log(recordMap);
  return (
    <div>
      <NotionPage recordMap={recordMap} rootPageId={rootPageId} />
    </div>
  );
}
