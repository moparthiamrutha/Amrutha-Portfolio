import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
  const posts = getAllPosts();

  const blogEntries = posts.map((post) => ({
    url: `https://www.linkedin.com/in/krishnaaaaaa/`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: "https://www.linkedin.com/in/krishnaaaaaa/",
      lastModified: new Date(),
    },
    {
      url: "https://www.linkedin.com/in/krishnaaaaaa/",
      lastModified: new Date(),
    },
    ...blogEntries,
  ];
}