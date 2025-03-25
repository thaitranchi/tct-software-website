import Link from "next/link";

// Dummy Blog Data (Replace with Firebase or API Data)
const blogs = [
  { id: 1, title: "Learn Next.js with TypeScript", slug: "learn-nextjs" },
  { id: 2, title: "How to Build a Serverless App", slug: "serverless-app" },
  { id: 3, title: "Understanding Firebase Authentication", slug: "firebase-auth" },
];

export default function Blog() {
  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
