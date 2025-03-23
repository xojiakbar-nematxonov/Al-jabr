import Image from "next/image";
import Navbar from "@/components/dashboard/navbar";
import Header from "@/components/dashboard/header";
import HeaderBanner from "@/components/header/headerBanner";
import Directions from "@/components/header/directions";


export default function Home() {
  return (
    <div className="max-w-[1440px] w-[100%] mx-auto">
       <Navbar/>
       <Header/>
       <HeaderBanner/>
       <Directions/>
    </div>
  );
}
