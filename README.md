# Code Corner

## Tech Blog Showcase

This project originally started as a personal tech blog, a space for me to document my learnings and share my thoughts on web development. While I've since moved my active blogging to [my main portfolio](https://www.synthcode.net/blog), this repository remains a valuable snapshot of my journey and a testament to my problem-solving skills. It showcases my ability to work with modern web technologies, integrate third-party APIs, and even dive deep into open-source libraries to overcome technical challenges.

The main goal of this project was to use Notion as a headless CMS for a blog. I wanted to be able to write my posts in Notion and have them automatically appear on my website, rendered as closely as possible to the original Notion page.

[**Live Demo**](https://code-corner.vercel.app/blog)

[**Example of a rendered Notion Page**](https://code-corner.vercel.app/blog/caae2efc-60d4-40d1-a5eb-248e4c5946fa)

<img width="1360" height="768" alt="{EE7291B4-4072-48C8-9815-7930A7AA8F4A}" src="https://github.com/user-attachments/assets/139b1484-1598-4dfd-8fd3-110f00d7e988" />

## ✨ Key Features & Technical Highlights

*   **Next.js 14 with App Router:** Built Next.js using the App Router for server-side rendering and static site generation.
*   **Notion as a Headless CMS:** Uses the Notion API to fetch and display blog posts, allowing for easy content management.
*   **Static Site Generation (SSG):** Blog posts are pre-rendered at build time for optimal performance and SEO.
*   **Custom `react-notion-x` Fork:** One of the biggest challenges in this project was the `react-notion-x` library, which was outdated and incompatible with Next.js 14. To solve this, I forked the repository and created my own npm package with the necessary patches. This included fixing a bug related to header generation. You can see my forked version in the `package.json` file.
*   **TypeScript:** The entire project is written in TypeScript, ensuring type safety and a better developer experience.
*   **Code Quality:** I've used `prettier` and `eslint` to maintain a clean, consistent, and error-free codebase.

## 📚 Challenges and Learning

This project was a significant learning experience. The need to fork and patch `react-notion-x` taught me a lot about the inner workings of npm packages, and the importance of community-driven development. It also solidified my understanding of Next.js, particularly its data fetching and static generation capabilities.

I'm proud of what I accomplished with this project, and I believe it demonstrates my ability to tackle complex technical challenges and deliver a high-quality product.

Feel free to explore the code and see how it all works.
