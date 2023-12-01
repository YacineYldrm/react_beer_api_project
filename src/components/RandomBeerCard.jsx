import { NavLink } from "react-router-dom";

const RandomBeerCard = () => {
    return ( 
        <article>
            <NavLink to="/random-beer">
            <div className="home_item_wrapper">
                    <img src="./random_beer_img.jpeg" alt="" />
                    <h2>Random Beer</h2>
                </div>
            </NavLink>
    
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptate. Itaque, in illum. Dolorum provident quibusdam ?</p>
        </article>
     );
}
 
export default RandomBeerCard;