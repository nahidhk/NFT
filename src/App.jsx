import Navbar from "./Nav/index";
import Hero from "./Hero/index";
import Top from "./Top";
import Charged from "./Charged/index";
import Artist from "./Artist";
import Feature from "./Feature";
import Comunity from "./comunity/index";

import Footer from "./Footer";
export default function App() {
  return (
    <div className="lg:px-10 py-5 bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Top />
      <Charged />
      <Artist />
      <Feature />
      <Comunity />
      <Footer />
    </div>
  );
}
