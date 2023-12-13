import Banner from "../Banner/Banner";
import About from "./HomeSection/About";
import Accordion from "./HomeSection/Accordion";
import Card from "./HomeSection/Card";
import CoutUp from "./HomeSection/CoutUp";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <About></About>
            <CoutUp></CoutUp>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;