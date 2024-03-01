"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Block, ExtendedRecordMap, Role } from "notion-types";
import { getBlockIcon, getBlockTitle } from "notion-utils";
import { defaultMapImageUrl } from "react-notion-x";

type blogs = {
  role: Role;
  value: Block;
}[];

type BlogGalleryProps = {
  blogs: blogs;
  recordMap: ExtendedRecordMap;
};

export default function BlogGallery({ blogs, recordMap }: BlogGalleryProps) {
  return (
    <div className="flex flex-wrap">
      {blogs.map((blog) => {
        const pageIconUrl = getBlockIcon(blog.value, recordMap);
        const title = getBlockTitle(blog.value, recordMap);
        const pageCoverUrl = blog.value?.format?.page_cover;
        const pageCover = defaultMapImageUrl(pageCoverUrl, blog.value);
        const pageIcon = defaultMapImageUrl(pageIconUrl, blog.value);
        const pagePosition = blog.value?.format?.page_cover_position;

        return (
          <BlogCard
            key={blog.value.id}
            blog={blog}
            pageCover={pageCover}
            pageIcon={pageIcon}
            pagePosition={pagePosition}
            title={title}
          />
        );
      })}
    </div>
  );
}

const BlogCard = ({
  key,
  blog,
  pageCover,
  pageIcon,
  pagePosition,
  title,
}: {
  key: string;
  blog: { role: Role; value: Block };
  pageCover: string | null;
  pageIcon: string | null;
  pagePosition: number;
  title: string;
}) => {
  return (
    <Link key={key} href={`/blog/${blog.value.id}`}>
      <div className="w-[213px]">
        <div className="relative h-[120px] ">
          {pageCover && (
            <Image
              className={cn(
                "h-auto w-auto object-cover",
                pagePosition === 1
                  ? "object-top"
                  : pagePosition === 2
                    ? "object-center"
                    : "object-bottom",
              )}
              src={pageCover}
              fill
              alt={title}
            />
          )}
        </div>

        <div className="flex">
          {pageIcon && (
            <Image
              className="h-fit"
              src={pageIcon}
              width={20}
              height={20}
              alt={title}
            />
          )}

          <div>{title}</div>
        </div>
      </div>
    </Link>
  );
};
