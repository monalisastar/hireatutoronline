import path from "path";
import matter from "gray-matter";
import fs from "fs";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";

type FrontMatter = {
  title: string;
  author: string;
  date: string;
  tags?: string[];
  coverImage?: string;
};

// ✅ Required for static generation of all slugs
export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir);

  return files
    .filter((file) => file.endsWith(".mdx.md"))
    .map((file) => ({
      slug: file.replace(/\.mdx\.md$/, ""),
    }));
}

// ✅ Metadata (already correct)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx.md`);
  if (!fs.existsSync(filePath)) return { title: "Post Not Found" };

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);
  const frontMatter = data as FrontMatter;

  const url = `https://hireatutornow.com/blog/${params.slug}`;

  return {
    title: `${frontMatter.title} | Hire a Tutor Blog`,
    description: `Tips and insights from Hire a Tutor: ${frontMatter.title}`,
    openGraph: {
      title: frontMatter.title,
      description: `Insights from our tutors: ${frontMatter.title}`,
      type: "article",
      url,
      images: frontMatter.coverImage
        ? [{ url: `https://hireatutornow.com${frontMatter.coverImage}` }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: frontMatter.title,
      description: `Academic tips: ${frontMatter.title}`,
      images: frontMatter.coverImage
        ? [`https://hireatutornow.com${frontMatter.coverImage}`]
        : [],
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: frontMatter.title,
        datePublished: frontMatter.date,
        author: {
          "@type": "Person",
          name: frontMatter.author,
        },
        image: frontMatter.coverImage
          ? `https://hireatutornow.com${frontMatter.coverImage}`
          : undefined,
        url,
        description: `Tips and insights from Hire a Tutor: ${frontMatter.title}`,
      }),
    },
  };
}

// ✅ Page component with correct type
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx.md`);
  if (!fs.existsSync(filePath)) notFound();

  const { default: MDXContent } = await import(`@/content/blog/${params.slug}.mdx.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);
  const frontMatter = data as FrontMatter;

  const copyLink = () => {
    navigator.clipboard.writeText(`https://hireatutornow.com/blog/${params.slug}`);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-white">
      <Script
        id="adsense-script"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        strategy="afterInteractive"
      />
      <Script id="adsense-init" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>

      {frontMatter.coverImage && (
        <div className="mb-6 rounded overflow-hidden">
          <Image
            src={frontMatter.coverImage}
            alt={frontMatter.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold mb-2">{frontMatter.title}</h1>
      <p className="text-sm text-gray-400 mb-4">
        {new Date(frontMatter.date).toDateString()} — 🔥 By {frontMatter.author}
      </p>

      {frontMatter.tags && (
        <div className="flex gap-2 flex-wrap mb-6">
          {frontMatter.tags.map((tag) => (
            <span key={tag} className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      )}

      <article className="prose prose-invert prose-blue max-w-none text-lg">
        <MDXContent />
      </article>

      <div className="mt-8 border-t border-white/10 pt-4 text-sm text-white/60">
        📤 Share this post:
        <button
          onClick={copyLink}
          className="ml-2 bg-white/10 px-2 py-1 rounded hover:bg-white/20 text-blue-300"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
}

