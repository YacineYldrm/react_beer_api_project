import { NavLink } from "react-router-dom";

const AllBeersCard = () => {
    return (
        <article>
            <NavLink to="/all-beers">
            <div className="home_item_wrapper">
                    <img src="./all_beers_img.jpeg" alt="" />
                    <h2>All Beers</h2>
                </div>
            </NavLink>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, voluptate. Itaque, in illum. Dolorum provident quibusdam?</p>
        </article> 
     );
}
 
export default AllBeersCard;