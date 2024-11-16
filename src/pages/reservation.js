import Hero from "../sections/hero";
import { useParams } from "react-router-dom";
import { fetchReservationsAPI, cancelAPI } from "../utils/Api";
import { Link } from "../components/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../components/card";
import { useNavigate } from "react-router-dom";
import  Button  from "../components/button";

const BookingPage = () => {
  const { hash } = useParams();
  const data = fetchReservationsAPI(hash);
  const navigate = useNavigate();

  const deleteReservation = () => {
    cancelAPI(hash);
    navigate("/booking");
  };

  return (
    <>
      <Hero image={"/images/reservation.jpg"}>
        {data ? (
          <>
            <h1>Congratulations!</h1>
            <h3>We will celebrate your {data.occasion}!</h3>
            <p>
              Your reservation is confirmed. We look forward to welcoming you
              on, take a note of the details below:
            </p>
            <Card animated={false}>
              <CardContent>
                <CardTitle>Reservation #{hash}</CardTitle>
                <CardDescription>
                  <table
                    style={{
                      color: "black",
                    }}
                  >
                    <tr>
                      <td>Guests:</td>
                      <td>{data.guests}</td>
                    </tr>
                    <tr>
                      <td>Date:</td>
                      <td>{data.date}</td>
                    </tr>
                    <tr>
                      <td>Time:</td>
                      <td>{data.time}</td>
                    </tr>

                    <tr>
                      <td>Occasion:</td>
                      <td>{data.occasion}</td>
                    </tr>
                  </table>
                </CardDescription>

                <Button variant={"primary"} onClick={deleteReservation}>
                  Cancel reservation
                </Button>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            <h1>Reservation not found</h1>
            <p>
              We couldn't find a reservation with the id:{" "}
              <strong>{hash}</strong>
            </p>
            <p>
              Please make a new reservation or contact us if you need any
              assistance.
            </p>
            <Link className="primary button" url="/booking" type={"internal"}>
              Make a reservation
            </Link>
          </>
        )}
      </Hero>
    </>
  );
};

export default BookingPage;
