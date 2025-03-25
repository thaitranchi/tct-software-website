interface BlogPostProps {
    params: { slug: string };
  }
  
  // Dummy Data (You can replace this with Firestore or API call)
  const blogs = {
    "learn-nextjs": {
      title: "Learn Next.js with TypeScript",
      content: "Next.js is a powerful framework built on React..."
    },
    "serverless-app": {
      title: "How to Build a Serverless App",
      content: "Serverless architecture allows developers to focus..."
    },
    "firebase-auth": {
      title: "Understanding Firebase Authentication",
      content: "Firebase makes it easy to implement authentication..."
    },
  };
  
  export default function BlogPost({ params }: BlogPostProps) {
    const post = blogs[params.slug];
  
    if (!post) {
      return <h1>Post Not Found</h1>;
    }
  
    return (
      <main>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <button onClick={() => history.back()}>Go Back</button>
      </main>
    );
  }
  