import { Link as RouterLink } from "react-router-dom";

export const Link = ({ children, url, type, className }) => {
  switch (type) {
    case "external":
      return (
        <a className={className} target="_blank" rel="noreferrer" href={url}>
          {children}
        </a>
      );

    case "phone":
      return (
        <a className={className} href={`tel:${url}`}>
          {children}
        </a>
      );

    case "mail":
      return (
        <a className={className} href={`mailto:${url}`}>
          {children}
        </a>
      );

    case "internal":
      return (
        <RouterLink className={className} to={url}>
          {children}
        </RouterLink>
      );

    case "anchor":
      return (
        <a className={className} href={url}>
          {children}
        </a>
      );

    default:
      return (
        <RouterLink className={className} to={url}>
          {children}
        </RouterLink>
      );
  }
};
