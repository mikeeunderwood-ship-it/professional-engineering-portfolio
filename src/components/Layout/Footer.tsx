export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-6 text-center text-gray-800 dark:text-gray-300">
      © {new Date().getFullYear()} Mike E Underwood
    </footer>
  );
}