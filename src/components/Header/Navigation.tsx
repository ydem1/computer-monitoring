import { Link } from "react-router-dom";
import { NAVIGATION_LINKS } from "./constants";

export const Navigation = () => (
  <nav>
    <ul className="dark:text-white-base flex gap-5">
      {NAVIGATION_LINKS.map(({ id, label, href }) => (
        <li key={id}>
          <Link
            className="block text-lg font-medium transition-all duration-300 ease-in-out hover:-translate-y-0.5"
            to={href}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
