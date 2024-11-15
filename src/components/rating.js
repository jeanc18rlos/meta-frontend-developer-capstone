import { Star } from "./icons";

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const star = i + 1;
    const fill = star <= rating ? "gold" : "gray";
    return <Star key={i} fill={fill} />;
  });
  return <div className="rating">{stars}</div>;
};

export default Rating;
