import AllBeersCard from "../components/AllBeersCard";
import RandomBeerCard from "../components/RandomBeerCard";
import './Home.scss'

const Home = () => {
    return ( 
        <section className="home_wrapper">
            <AllBeersCard/>
            <RandomBeerCard/>
        </section>
     );
}
 
export default Home;