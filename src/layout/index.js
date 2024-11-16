import Header from "./header";
import Footer from "./footer";
import { LINKS } from "../constants";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header links={LINKS[0].links} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {children}
      </div>
      <Footer links={LINKS} />
    </main>
  );
};

export default Layout;
