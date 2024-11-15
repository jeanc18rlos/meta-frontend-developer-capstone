import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/home";
import BookingPage from "./pages/booking";
import Footer from "./components/footer";

const LINKS = [
  {
    label: "Navigation",
    links: [
      {
        url: "/",
        label: "Home",
      },
      {
        url: "/about",
        label: "About",
      },
      {
        url: "/menu",
        label: "Menu",
      },
      {
        url: "/booking",
        label: "Reservations",
      },
      {
        url: "/booking",
        label: "Order Online",
      },
      {
        url: "/login",
        label: "Login",
      },
    ],
  },
  {
    label: "Contact",
    links: [
      {
        url: "/address",
        label: "Address",
      },
      {
        url: "/phone number",
        label: "Phone number",
      },
      {
        url: "/email",
        label: "Email",
      },
    ],
  },
  {
    label: "Social Media",
    links: [
      {
        url: "/facebook",
        label: "Facebook",
      },
      {
        url: "/instagram",
        label: "Instagram",
      },
      {
        url: "/twitter",
        label: "Twitter",
      },
    ],
  },
];
function App() {
  return (
    <main className="layout">
      <Header links={LINKS[0].links} />
      <div>
        <Routes>
           <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </div>
      <Footer links={LINKS} />
    </main>
  );
}

export default App;
