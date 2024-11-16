import { MENU } from "../constants";
import AboutUs from "../sections/about-us";
import Hero from "../sections/hero";
import Menu from "../sections/menu";
import Testimonials from "../sections/testimonials";
import { TESTIMONIALS } from "../constants";
import { Link } from "../components/link";

const Home = () => {
  return (
    <>
      <Hero image={"/images/bruschettas.jpg"}>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <br />
        <Link className={"button primary"} to={"/booking"}>
          Reserve a table
        </Link>
      </Hero>
      <Menu
        title={"This week specials"}
        linkText={"Online Menu"}
        link={"/booking"}
        cards={MENU.slice(0, 3)}
      />
      <Testimonials title={"Testimonials"} cards={TESTIMONIALS} />
      <AboutUs
        title={"Little Lemon"}
        subtitle={"Chicago"}
        description={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.ƒAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        }
        image1={"/images/mario-and-adrian-2.jpg"}
        image2={"/images/mario-and-adrian-1.jpg"}
      />
    </>
  );
};

export default Home;
