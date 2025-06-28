'use client';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type PostMeta = {
  title: string;
  date: string;
  slug: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
};

const getAllPosts = (): PostMeta[] => {
  const postsDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data } = matter(content);
      return {
        title: data.title || slug,
        date: data.date || '',
        slug,
        excerpt: content.split('\n').slice(4, 8).join(' '),
        coverImage: data.coverImage || '',
        tags: data.tags || [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<PostMeta[]>([]);
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setAllPosts(getAllPosts());
  }, []);

  const tags = Array.from(new Set(allPosts.flatMap(p => p.tags || [])));

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt?.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const featured = filteredPosts[0];
  const rest = visiblePosts.slice(featured ? 1 : 0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-12">
      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg mb-4">
          Tutor Blog & Study Hacks 🚀
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          Insights for essays, coding, AI, and academic life.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Search posts..."
            className="px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1 text-sm rounded-full border ${
                tag === selectedTag
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'text-blue-300 border-blue-300 hover:bg-blue-300/20'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="max-w-5xl mx-auto mb-12 bg-white/5 backdrop-blur p-6 rounded-2xl hover:shadow-xl transition-all">
          <Link href={`/blog/${featured.slug}`}>
            <div className="cursor-pointer">
              {featured.coverImage && (
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
              )}
              <h2 className="text-3xl font-bold mb-2">{featured.title}</h2>
              <p className="text-sm text-gray-400 mb-3">
                {new Date(featured.date).toDateString()}
              </p>
              <p className="text-white/90 text-md">{featured.excerpt}</p>
              {Array.isArray(featured.tags) && featured.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap mt-3">
                  {featured.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-blue-900/40 text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {rest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="group bg-white/5 hover:bg-white/10 transition backdrop-blur rounded-xl p-6 cursor-pointer hover:shadow-md hover:scale-[1.02] duration-300">
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              )}
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">{post.title}</h3>
              <p className="text-sm text-gray-400">{new Date(post.date).toDateString()}</p>
              <p className="text-sm text-white/80 mt-2">{post.excerpt}</p>
              {Array.isArray(post.tags) && post.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap mt-3">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-blue-900/40 text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </section>

      {/* Load More */}
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg text-sm"
          >
            Load More
          </button>
        </div>
      )}

      {/* Discord CTA */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-2">🎓 Join 500+ learners on our Discord</h2>
        <Link
          href="https://discord.gg/tWXsGZrUX9"
          target="_blank"
          className="inline-block bg-indigo-600 px-5 py-3 mt-3 rounded-lg hover:bg-indigo-700 transition text-white font-medium"
        >
          Join Now
        </Link>
      </section>
    </main>
  );
}

