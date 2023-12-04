import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import GoBackBtn from "../components/GoBackBtn";
import './ItemPage.scss'

const ItemPage = () => {

    // get passed data with useLocation() method
    const image_url = useLocation().state.image_url;
    const name = useLocation().state.name;
    const tagline = useLocation().state.tagline;
    const first_brewed = useLocation().state.first_brewed;
    const attenuation_level = useLocation().state.attenuation_level;
    const description = useLocation().state.description;

    console.log(useLocation());

    //render detail page
    return (
        <>
        <article className="detail_page_wrapper">
            <img className="item_img" src={image_url} alt={`a picture of a beer container from the brand ${name}.`} />
            <div>
                <h2>{name}</h2>
                <h3>{tagline}</h3>
                <div className="brew_info_wrapper">
                    <p>First brewed: </p>
                    <p>{first_brewed}</p>
                    <p>Attenuation level: </p>
                    <p>{attenuation_level}</p>
                </div>
                <p>{description}</p>
                <GoBackBtn/>
            </div>
        </article>
        <Nav/>
        </> 
    );
}

export default ItemPage;