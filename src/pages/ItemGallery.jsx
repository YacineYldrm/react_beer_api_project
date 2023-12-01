import { useEffect, useState } from "react";
import DetailsBtn from "../components/DetailsBtn";
import Nav from "../components/Nav";
import './ItemGallery.scss';

const ItemGallery = () => {

    const [megaData, setMegaData] = useState(null)
        
    //fetch request
    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => response.json())
            .then(data => setMegaData(data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
        <section className="gallery_wrapper">

            {megaData? (
            <>
                {megaData?.map((item) => (
                    <div className="item_wrapper" key={item._id}>
                        <img src={item.image_url} alt="" />
                        <div className="item_text_wrapper">
                            <h2>{item.name}</h2>
                            <h3>{item.tagline}</h3>
                            <p>Created by: {item.name}</p>
                            {/* pass data to details btn component */}
                            <DetailsBtn 
                            id={item._id} 
                            image_url={item.image_url}
                            name={item.name} 
                            tagline={item.tagline}
                            first_brewed={item.first_brewed}
                            attenuation_level={item.attenuation_level}
                            description={item.description}
                            />
                            </div>
                    </div> 
                    ))}
            </>
            ) : <p>...Beers</p>}
        </section>
        <Nav/>
        </> 
            
    );
}

export default ItemGallery;