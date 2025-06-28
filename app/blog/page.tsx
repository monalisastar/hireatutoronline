import Link from 'next/link';
import { getAllPosts } from '@/lib/getAllPosts';

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featured = allPosts[0];
  const rest = allPosts.slice(1);
  const hasMore = false;

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-12">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg mb-4">
          Tutor Blog & Study Hacks 🚀
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          Insights for essays, coding, AI, and academic life.
        </p>
      </section>

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
            </div>
          </Link>
        </section>
      )}

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
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400">
                {new Date(post.date).toDateString()}
              </p>
              <p className="text-sm text-white/80 mt-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>

      {hasMore && (
        <div className="text-center mt-12">
          <Link
            href="/blog/page/2"
            className="text-blue-400 underline hover:text-blue-500"
          >
            View More Posts →
          </Link>
        </div>
      )}

      <section className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-2">
          🎓 Join 500+ learners on our Discord
        </h2>
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

