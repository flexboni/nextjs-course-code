import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);
  // {slug: Array(4)}
  // => slug: (4) ['1', '2', '3', '4']
  // => [[Prototype]]: Object

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
