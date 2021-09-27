import NavBar from "./navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
      <div className="layout">
        <NavBar />
            <main>{children}</main>
        <Footer />
      </div>
    )
  }