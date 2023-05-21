import Banner from "./Banner";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import TabSection from "./TabSection";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <TabSection ></TabSection>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;