import Link from "next/link";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default function HomePage() {
  return (
   <div className="min-h-screen flex flex-col pt-24">
    <Navigation />
    <main className="flex-grow">
      <h1>Welcome to the Home Page</h1>
      <Link href='/products' className="text-black-500 underline">Go to Products</Link>
    </main>
    <Footer />
   </div>
  );
}
