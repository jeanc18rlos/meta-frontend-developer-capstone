import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import BookingPage from "../pages/booking";
import ReservationPage from "../pages/reservation";
import Layout from "../layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/reservation/:hash" element={<ReservationPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
