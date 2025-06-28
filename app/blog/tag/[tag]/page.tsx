import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
    });
};

// ✅ Fix type error by using props: any
export async function generateMetadata(props: any) {
  const { params } = props as { params: { tag: string } };
  const tag = decodeURIComponent(params.tag);
  const title = `Posts tagged with #${tag}`;
  const description = `Browse all blog posts related to ${tag} on Hire a Tutor Blog.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://hireatutornow.com/blog/tag/${tag}`,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

// ✅ Fix Vercel constraint with props: any
export default function TagPage(props: any) {
  const { params } = props as { params: { tag: string } };
  const tag = decodeURIComponent(params.tag);
  const allPosts = getAllPosts();

  const filtered = allPosts.filter(post => post.tags?.includes(tag));

  if (filtered.length === 0) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-4">
        <Link href="/blog" className="hover:underline text-blue-400">Blog</Link> &gt; <span className="text-white font-semibold">#{tag}</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">
        📚 Posts tagged with <span className="text-blue-400">#{tag}</span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filtered.map((post) => (
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
      </div>
    </main>
  );
}

