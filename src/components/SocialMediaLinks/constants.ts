import { ReactComponent as AlternateEmailIcon } from "src/assets/icons/socila-icons/email.svg";
import { ReactComponent as GitHubIcon } from "src/assets/icons/socila-icons/github.svg";
import { ReactComponent as InstagramIcon } from "src/assets/icons/socila-icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "src/assets/icons/socila-icons/linkedin.svg";
import { ReactComponent as TelegramIcon } from "src/assets/icons/socila-icons/telegram.svg";
import { ILink } from "src/@types/link";

export const SOCIAL_MEDIA_LINKS: ILink[] = [
  {
    id: 1,
    href: "https://github.com/ydem1",
    icon: GitHubIcon,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/vadym-bavorovskiy-146b19280/",
    icon: LinkedInIcon,
  },
  {
    id: 3,
    href: "https://t.me/vadymb14",
    icon: TelegramIcon,
  },
  {
    id: 4,
    href: "mailto:vadymbavorovskyi@gmail.com",
    icon: AlternateEmailIcon,
  },
  {
    id: 5,
    href: "https://www.instagram.com/_ydem_/",
    icon: InstagramIcon,
  },
];
