import AboutUs from "../components/about-us";
import Hero from "../components/hero";
import Menu from "../components/menu";
import Testimonials from "../components/testimonials";

const TESTIMONIALS = [
  {
    name: "Jane Doe",
    title: "Regular customer",
    image: "/avatar.png",
    description:
      "Great food and service!, My favorite place to eat in Chicago so far; I highly recommend it!",
    rating: 4,
  },
  {
    name: "John Doe",
    title: "First time visitor",
    image: "/avatar.png",
    description:
      "I was visiting Chicago and found this place by accident. I'm glad I did, the food was amazing!",
    rating: 3,
  },
  {
    name: "Alice Doe",
    title: "Food critic",
    image: "/avatar.png",
    description:
      "I've been to many restaurants in Chicago, and this one is one of the best. The food is delicious and the service is great.",
    rating: 5,
  },
];
const CARDS = [
  {
    title: "Greek salad",
    description: "Fresh salad with feta cheese, olives, and tomatoes",
    image: "/greek-salad.jpg",
    price: "12.99",
    link: "/booking",
    linkText: "Order a delivery",
  },
  {
    title: "Bruchetta",
    description: "Toasted bread with fresh tomatoes, garlic, and basil",
    image: "/bruchetta.svg",
    price: "5.99",
    link: "/booking",
    linkText: "Order a delivery",
  },
  {
    title: "Lemon Dessert",
    image: "/lemon-dessert.jpg",
    description: "Lemon sorbet with fresh mint",
    price: "3.99",
    link: "/booking",
    linkText: "Order a delivery",
  },
];
const Home = () => {
  return (
    <>
      <Hero
        title={"Little Lemon"}
        subtitle={"Chicago"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        linkText={"Reserve a Table"}
        link={"/booking"}
        image={"/restauranfood.jpg"}
      />
      <Menu
        title={"This week specials"}
        linkText={"Online Menu"}
        link={"/booking"}
        cards={CARDS}
      />
      <Testimonials title={"Testimonials"} cards={TESTIMONIALS} />
      <AboutUs
        title={"Little Lemon"}
        subtitle={"Chicago"}
        description={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.ƒAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        }
        image1={"/Mario and Adrian A.jpg"}
        image2={"/Mario and Adrian b.jpg"}
      />
    </>
  );
};

export default Home;
