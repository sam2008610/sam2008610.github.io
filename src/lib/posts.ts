import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '../consts';

export type Post = CollectionEntry<'posts'>;

/** 已發布的文章（開發模式下也顯示草稿），新到舊排序 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function tagSlug(tag: string): string {
  return tag.trim().toLowerCase().replace(/\s+/g, '-');
}

export function getTags(posts: Post[]) {
  const tags = new Map<string, { name: string; slug: string; posts: Post[] }>();
  for (const post of posts) {
    for (const name of post.data.tags) {
      const slug = tagSlug(name);
      if (!tags.has(slug)) tags.set(slug, { name, slug, posts: [] });
      tags.get(slug)!.posts.push(post);
    }
  }
  return [...tags.values()].sort((a, b) => b.posts.length - a.posts.length || a.name.localeCompare(b.name));
}

function plainText(markdown = ''): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#+\s.*$/gm, ' ')
    .replace(/[`*_>#|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** 文章摘要：優先使用 front matter 的 description，否則取內文開頭 */
export function excerpt(post: Post, length = 90): string {
  if (post.data.description) return post.data.description;
  const text = plainText(post.body);
  return text.length > length ? `${text.slice(0, length)}…` : text;
}

/** 閱讀時間：中文以每分鐘 400 字、英文以每分鐘 200 字估算 */
export function readingMinutes(post: Post): number {
  const text = plainText(post.body);
  const cjk = (text.match(/[㐀-鿿豈-﫿]/g) ?? []).length;
  const words = (text.replace(/[㐀-鿿豈-﫿]/g, ' ').match(/[A-Za-z0-9]+/g) ?? []).length;
  return Math.max(1, Math.round(cjk / 400 + words / 200));
}

/** long: "Aug 9, 2024"；short: "Aug 09"（彙整頁用，年份另外顯示） */
export function formatDate(date: Date, style: 'long' | 'short' = 'long'): string {
  return new Intl.DateTimeFormat(SITE.locale, {
    timeZone: SITE.timeZone,
    year: style === 'long' ? 'numeric' : undefined,
    month: 'short',
    day: style === 'long' ? 'numeric' : '2-digit',
  }).format(date);
}

export function yearOf(date: Date): string {
  return new Intl.DateTimeFormat('en', { timeZone: SITE.timeZone, year: 'numeric' }).format(date);
}
