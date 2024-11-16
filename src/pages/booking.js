import BookingForm from "../components/booking-form";
import Hero from "../sections/hero";
import Menu from "../sections/menu";
import { MENU } from "../constants";
import Booking from "../sections/booking";
import { useAvailableTimes } from "../hooks/useAvailableTimes";

const BookingPage = () => {
  const { availableTimes, updateTime } = useAvailableTimes();

  return (
    <>
      <Hero image={"/images/reservation.jpg"}>
        <h1>Book a Table</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Hero>
      <Menu title={"Our Entire Menu"} cards={MENU} />
      <Booking
        title={"Book Now!"}
        subTitle={"Don't miss out on a table!"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      >
        <BookingForm availableTimes={availableTimes} updateTime={updateTime} />
      </Booking>
    </>
  );
};

export default BookingPage;
