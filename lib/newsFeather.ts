import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
const postDirectory = join(process.cwd(), "_news");

export function getPostSlugs() {
  return fs.readdirSync(postDirectory);
}
export function getPostSlug(slug: any, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items: any = {};
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
export async function getAllNews(fields = []) {
  const slugs = getPostSlugs();
  const post = slugs
    .map((slug) => getPostSlug(slug, fields))
    .sort((p1: any, p2: any) => (p1.data > p2.data ? -1 : 1));
}
