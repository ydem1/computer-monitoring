import { SOCIAL_MEDIA_LINKS } from "./constants";

export const SocialMediaLinks = () => (
  <nav>
    <ul className="flex gap-5 dark:text-white-base">
      {SOCIAL_MEDIA_LINKS.map(({ id, href, icon: Icon }) => (
        <li key={id}>
          <a href={href} target="_blank" rel="noreferrer">
            <Icon className="dark:fill-white-base" />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
