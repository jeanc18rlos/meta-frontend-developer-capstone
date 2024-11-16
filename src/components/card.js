import { Link } from "react-router-dom";
import Rating from "./rating";
import { Scooter } from "./icons";
import "./card.css";

export const CardTitle = ({ children }) => (
  <h4 className="card-title">{children}</h4>
);

export const CardDescription = ({ children }) => (
  <div className="card-description">{children}</div>
);

export const CardImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="card-image" />
);

export const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);
export const Card = ({ children, className, animated = true }) => (
  <div className={`card ${className} ${animated ? "animated" : ""}`}>
    {children}
  </div>
);

export const MenuCard = ({
  title,
  description,
  image,
  price,
  link,
  linkText,
}) => (
  <Card className={"menu-card"} image={image}>
    <CardImage src={image} alt={title} />
    <CardContent>
      <CardTitle>
        {title} <span>${price}</span>
      </CardTitle>
      <CardDescription>{description}</CardDescription>
      <Link to={link}>
        {linkText} <Scooter />
      </Link>
    </CardContent>
  </Card>
);

export const TestimonialCard = ({ name, image, description, rating }) => (
  <Card className={"testimonial-card"} image={image}>
    <div className="person">
      <CardImage src={image} alt={name} />
      <div>
        <CardTitle>{name}</CardTitle>
        <Rating rating={rating} />
      </div>
    </div>
    <CardContent>
      <blockquote className="card-description">{description}</blockquote>
    </CardContent>
  </Card>
);
