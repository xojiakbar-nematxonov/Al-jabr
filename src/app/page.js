import Image from "next/image";
import Navbar from "@/components/dashboard/navbar";
import Header from "@/components/dashboard/header";
import HeaderBanner from "@/components/header/headerBanner";
import Directions from "@/components/header/directions";
import About from "@/components/header/about";
import Programm from "@/components/header/program";
import Wework from "@/components/header/wework";
import Footer from "@/components/dashboard/footer";

export default function Home() {
  return (
    <div className="max-w-[1440px] w-[100%] mx-auto">
       <Navbar/>
       <Header/>
       <HeaderBanner/>
       <Directions/>
       <About/>
       <Programm/>
       <Wework/>
       <Footer/>
    </div>
  );
}
 