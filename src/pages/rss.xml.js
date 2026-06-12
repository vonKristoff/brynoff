import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SEO_DESCRIPTION, SEO_TITLE } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
