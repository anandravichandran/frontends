import Image from "next/image";
import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import {navItems} from "@/data";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
// import Navbar from "@/components/ui/Navbar";
import DataHero from "@/components/DataInspection/DataHero";
import Casestudy from "@/components/DataInspection/Casestudy";
// import DataSparkles from "@/components/DataInspection/DataSparkles";
// import Login from "@/components/auth/Login";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <Hero />
        <FloatingNav navItems = {navItems}/>
        {/* <Navbar/> */}
        <Grid/>
        <RecentProjects/>
        <Client/>
        <Experience/>
        <Approach/>
        <Footer/>
        {/* <DataSparkles/> */}
        <DataHero/>
        <Casestudy/>
        {/* <Login/> */}
        
      </div>
    </main>
  );
}
