import { useEffect, useState } from "react";



export const Slideshow = () => {
    const [page, setPage] = useState<number>(0);
    const images = [
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/dark-tropical-green-nature-background-free-image.jpeg?w=2210&quality=70",
        "https://media.istockphoto.com/id/2208883068/photo/palm-leaves-background.jpg?s=2048x2048&w=is&k=20&c=gh8BHIKT-9UIGskvyaD-bVOEXRpF5gHPVOOdS2kydPU=",
        "https://media.istockphoto.com/id/2171647430/photo/cat-ba-national-park-on-cat-ba-island-vietnam.jpg?s=2048x2048&w=is&k=20&c=gphkMuXZJ_o4BiGRC9_5bBcstnLeGrxUBzVZu9s9CF0=",
        "https://media.istockphoto.com/id/1474101060/photo/drone-view-over-tam-coc-with-karst-formations-ninh-binh-province-vietnam.jpg?s=2048x2048&w=is&k=20&c=b9BRfLsKVkiFWpuaH9_HhiBCLvT4TB0o_V6zkA_Jk9Y="
    ];
    useEffect(()=>{
        const interval = setInterval(() => {
            setPage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
     },[page])
  
    return (
        <div className="slideshow">
            <h2>Slideshow Component</h2>
            <p>This is a placeholder for the Slideshow component.</p>
            <div className ="button-group" style={{display: "flex", gap: "10px", marginBottom: "20px"}}>
                <button onClick={() => setPage((prev) => (prev - 1 + images.length) % images.length)}>Previous</button>
                <button onClick={() => setPage((prev) => (prev + 1) % images.length)}>Next</button>
                <button onClick={ ()=> setPage(0)}>Reset</button>
            </div>
            <div className="slideshow-container">
             
                <img style={{width: "500px", height: "auto"}} src={images[page]} alt={`Slide ${page + 1}`} className="slideshow-image" />
             
            </div>
        </div>
    );
}