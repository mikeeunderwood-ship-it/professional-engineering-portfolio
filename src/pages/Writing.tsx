export default function Writing() {
  return (
    <section className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-6">Writing</h1>

      <p className="max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        This page is reserved for rendering individual writing content.  
        To view articles, navigate to <code>/writing/:slug</code> where each
        slug corresponds to a Markdown file under <code>content/writing</code>.
      </p>

      <p className="max-w-3xl text-lg leading-relaxed mt-6 text-gray-700 dark:text-gray-300">
        If you reached this page directly, you may be looking for the main Writing
        index, which is located at <code>/writing</code> and lists all available articles.
      </p>
    </section>
  );
}