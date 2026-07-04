import "./Ads.css";
import AdCategories from "./ad-categories/AdCategories";

function Ads()
{
    return(
        <div className="ads">
        <AdCategories className={"ad-kids"} 
        title={"Tiny Trendsetters"} 
        description={"Fun, colorful, and comfortable outfits made for little explorers and their everyday adventures. Bright, playful, and comfortable outfits designed for energetic kids, making every adventure stylish and fun.Soft, colorful, and playful outfits designed to keep kids comfortable, active, and stylish every day."} 
        size={"42px"}/>
       
        <AdCategories  className={"ad-mens"} 
        title={"The Modern Gentleman"} 
        description={"Refined styles and versatile essentials designed for confidence, comfort, and effortless sophistication."} 
        size={"32px"}/>
        
        <AdCategories className={"ad-womens"} 
        title={"Grace in Style"} 
        description={"Chic and elegant fashion pieces that celebrate confidence, individuality, and timeless beauty."} 
        size={"32px"}/>
         
         
        </div>
    );
}

export default Ads;