import { useParams } from "react-router-dom";
import { getPost } from "../lib/posts";
import Breadcrumb from "../components/Breadcrumb";

export default function WritingPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : null;

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
    <section className="bg-white dark:bg-gray-900 py-4 px-6">
      <div className="container mx-auto max-w-5xl">
        <Breadcrumb />

        <article
          className="
            prose prose-lg dark:prose-invert max-w-5xl
            [&_p]:leading-6
            [&_p]:my-3
            [&_h1]:mb-5
            [&_h2]:mt-8 [&_h2]:mb-4
            [&_h3]:mt-6 [&_h3]:mb-3
            [&_ol]:my-3
            [&_hr]:my-4
            [&_li]:leading-3
          "
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </section>
  );
}