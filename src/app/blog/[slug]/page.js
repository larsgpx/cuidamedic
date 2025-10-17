import { BlogPost } from "@/views/BlogPost";

export default function BlogPostPage({ params }) {
  return <BlogPost postId={params.slug} />;
}
