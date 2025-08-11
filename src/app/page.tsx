import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default function HomePage() {
  return (
   <div className="min-h-screen flex flex-col">
    <Navigation />
    <Footer />
   </div>
  );
}
