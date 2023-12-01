import { NavLink } from "react-router-dom";


const DetailsBtn = ({id, image_url, name, tagline, first_brewed, attenuation_level, description}) => {
    return ( 
        
        // pass fetched data via link to detail page component
        <NavLink to={`/beer-details/${id}`} state={{id, image_url, name, tagline, first_brewed, attenuation_level, description }}>Details</NavLink>
    );
}

export default DetailsBtn;