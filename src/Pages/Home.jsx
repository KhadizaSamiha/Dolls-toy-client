import Aos from "aos";
import AOS from "./AOS";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import TabSection from "./TabSection";
import "aos/dist/aos.css"

import { useEffect } from "react";



const Home = () => {
    useEffect(() =>{
        Aos.init()
      },[])
    return (
        <div >
            <Banner></Banner>
            <TabSection ></TabSection>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <AOS></AOS>
        </div>
    );
};

export default Home;