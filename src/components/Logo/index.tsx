import { Link } from "react-router-dom";
import { PATHNAMES } from "src/constants/routes";
import logo from "src/assets/images/logo.jpg";

export const Logo = () => (
  <Link className="block h-10 w-10" to={PATHNAMES.HOME}>
    <img className="h-full w-full" src={logo} alt="КПІ ім. Ігоря Сікорського" />
  </Link>
);
