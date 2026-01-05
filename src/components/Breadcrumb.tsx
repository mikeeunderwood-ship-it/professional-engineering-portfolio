import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  // Convert slug → readable text
  const format = (str: string) =>
    str
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <nav className="text-base text-gray-700 dark:text-gray-300 mb-6">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>

        {parts.map((part, index) => {
          const path = "/" + parts.slice(0, index + 1).join("/");
          const isLast = index === parts.length - 1;

          return (
            <li key={path} className="flex items-center space-x-2">
              <span>/</span>

              {isLast ? (
                <span className="font-medium text-gray-900 dark:text-gray-200">
                  {format(part)}
                </span>
              ) : (
                <Link to={path} className="hover:underline">
                  {format(part)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}