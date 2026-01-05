import { useParams } from "react-router-dom";
import { getPost } from "../lib/posts";
import Breadcrumb from "../components/Breadcrumb";

export default function WritingPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : null;

console.log("WritingPost mounted");

  if (!post) {
    return (
      <section className="bg-white dark:bg-gray-900 py-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumb />
          <p className="text-gray-700 dark:text-gray-300">Post not found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900 py-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <Breadcrumb />

        <article
          className="prose prose-lg dark:prose-invert max-w-5xl"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </section>
  );
}