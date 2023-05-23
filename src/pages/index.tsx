import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="bg-[#fffcf4] text-[#222] font-medium ">
      <Navbar />
      <Hero />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}
