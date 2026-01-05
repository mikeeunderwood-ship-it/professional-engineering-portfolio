import { useParams } from "react-router-dom";
import { getPost } from "../lib/posts";
import Breadcrumb from "../components/Breadcrumb";

export default function WritingPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : null;

console.log("WritingPost mounted");

  if (!post) {
    return (
      <section className="container mx-auto py-20">
        <Breadcrumb />
        <p className="text-gray-700 dark:text-gray-300">Post not found.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-20">
      <Breadcrumb />

      <article
        className="prose prose-lg dark:prose-invert max-w-3xl"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </section>
  );
}