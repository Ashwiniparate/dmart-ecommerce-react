import "./Trending-Products.css";
import Card from "../card/Card";

function TrendingProducts({ title, cards }) {
    const [card1, card2, card3, card4] = cards;
    return(
        <div className="trending">
            <h1>{title}</h1>
            <div className="home-card-container">
                <Card image={card1.image} offer={card1.offer}/>
               <Card image={card2.image} offer={card2.offer}/>
                 <Card image={card3.image} offer={card3.offer}/>
                   <Card image={card4.image} offer={card4.offer}/>
            </div>
           </div>
    );
}
export default TrendingProducts;