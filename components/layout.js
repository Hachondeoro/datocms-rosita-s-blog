import Alert from "../components/alert";
import Footer from "../components/footer";
import Navbar from "@components/navbar";

export default function Layout({ preview, children }) {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
