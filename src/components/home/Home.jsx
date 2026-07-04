import "./Home.css";
import Ads from "./ads/Ads";
import Card from "./card/Card";
import TrendingProducts from "./trending-products/Trending-Products";
function Home(){
    return(
        <div id="home">
           <Ads/>
           <TrendingProducts title={"Trending Products"} 
           cards={[
            {image:"https://tse1.mm.bing.net/th/id/OIP.Cb7CeQmIBl7GNTork1GzuQHaD4?pid=Api&h=220&P=0" , offer:"offer upto 30%"},
           
            {image:"https://tse2.mm.bing.net/th/id/OIP.-KiBm2lUptN_PXNHOTUsWwHaHa?pid=Api&h=220&P=0" , offer:"offer upto 70%"},
           
            {image:"https://tse3.mm.bing.net/th/id/OIP.1Z6pyhBiCM3hfJEVgC1hYwHaHa?pid=Api&h=220&P=0" , offer:"offer upto 80%"},
           
            {image:"https://tse3.mm.bing.net/th/id/OIP.UdcWtgOGAGnrTllHCUsjpAHaHa?pid=Api&h=220&P=0" , offer:"offer upto 50%"}
           ]}/>

            <TrendingProducts title={"Winter Specials"} 
             cards={[
                {image:"https://th.bing.com/th/id/OIF.KDg65xqBRELaEdagWreyKg?w=168&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"offer upto 40%"},
                {image:"https://th.bing.com/th/id/OIP.TEoB6Iabv0AsPeL82gUIDwHaLs?w=186&h=295&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"offer upto 20%"},
                {image:"https://th.bing.com/th/id/OIP.HWQQOfeiZZMCcWqtSlteJAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"offer upto 90%"},
                {image:"https://th.bing.com/th/id/OIP.EctlieAPWwqx1NalWpzEUAHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"offer upto 40%"}
                ]}/>
          

              <TrendingProducts title={"Hair & Skincare Essentials"} 
             cards={[{image:"https://th.bing.com/th/id/OIP.SI31HpPU7FhxpASo8F4x7wHaFw?w=241&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"offer upto 20%"},{image:"https://th.bing.com/th/id/OIP.YZ0FEVbFOKwkctukdsm1sQHaEK?w=254&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"offer upto 80%"},{image:"https://th.bing.com/th/id/OIP.fZjJ7cg0dlEUzrqAobDIjQHaFW?w=243&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"offer upto 20%"},{image:"https://th.bing.com/th/id/OIP.Etm2mBVn7DbdqYu50wCBagHaDF?w=273&h=145&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"offer upto 10%"}]}/>

             <TrendingProducts title={"Home Decor & Furnishing"} 
             cards={[
                {image:"https://th.bing.com/th/id/OIP.6dF-_Y0FYdjcyot4uaDFmgHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"min upto 20%"},{image:"https://th.bing.com/th/id/OIP.iIE9-11RhxAYVQGU7OHDAgHaHa?w=156&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"min upto 30%"},{image:"https://th.bing.com/th/id/OIP.-o614ppFOak46v_qVrwW1wHaGa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"min upto 80%"},{image:"https://th.bing.com/th/id/OIP.sdEVFo4bmqLk5Nm_h_8dsQHaEK?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , offer:"min upto 60%"}
                ]}/>
            </div>
    );
}

export default Home;