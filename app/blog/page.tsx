import { notion } from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";
import { getBlockIcon, getBlockTitle } from "notion-utils";

export default async function Blog() {
  const rootPageId = "1ecf59c6f5c74f25b1a0d91f7c8dbe1c";
  const recordMap = await notion.getPage(rootPageId);

  const blogs = Object.values(recordMap.block).filter(
    (block) => block.value.type === "page",
  );

  return (
    <div>
      {blogs.map((blog) => {
        const icon = getBlockIcon(blog.value, recordMap);
        const title = getBlockTitle(blog.value, recordMap);

        // const hasPageCover: string | undefined = blog.value?.format?.page_cover;

        // const image = defaultMapImageUrl(
        //   "https://prod-files-secure.s3.us-west-2.amazonaws.com/0071da97-cb8f-4ab6-8d15-3b0043107b59/653b0b08-6f7f-4728-9b70-d1328fa200cb/2471393.gif",
        //   blog.value
        // );

        // console.log(image);

        return (
          <>
            <div>{title}</div>
            <div>{icon}</div>
            <Link href={`/blog/${blog.value.id}`}>asdsa</Link>

            {/* <Link href={blog.value.id}>dsad<Link/> */}
          </>
        );
      })}
    </div>
  );
}
