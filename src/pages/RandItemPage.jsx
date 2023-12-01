import Nav from "../components/Nav";
import GoBackBtn from "../components/GoBackBtn";
import { useState, useEffect } from "react";

const RandomItemPage = () => {

    const [megaData, setMegaData] = useState(null)

    //fetch request
    useEffect(() =>{
        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => response.json())
            .then(data => setMegaData(data))
            .catch((error) => console.log(error));
    }, [])
    
    //render detail page
    return ( 
        <>
        <article className="detail_page_wrapper">
            {megaData ? (
                <>
                <img className="item_img" src={megaData.image_url} alt={`a picture of a beer container from the brand ${megaData.name}.`} />
                <div>
                    <h2>{megaData.name}</h2>
                    <h3>{megaData.tagline}</h3>
                    <div className="brew_info_wrapper">
                        <p>First brewed: </p>
                        <p>{megaData.first_brewed}</p>
                        <p>Attenuation level: </p>
                        <p>{megaData.attenuation_level}</p>
                    </div>
                    <p>{megaData.description}</p>
                    <GoBackBtn/>
                </div>
                </>
            ) : <p>...Random beer</p> }
        </article>

        <Nav/>
        </>
    );
}

export default RandomItemPage;