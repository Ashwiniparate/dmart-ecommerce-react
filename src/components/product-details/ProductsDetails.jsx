import "./ProductsDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";


function ProductsDetails() {
  const navigate = useNavigate();
const dispatch = useDispatch();
  const params = useParams();//params = {id : 1}
const [productsdetails,setProductDetails]=useState(null)
 useEffect(()=>{
  axios.get(`http://localhost:3000/products/${params.id}`)
  .then((res)=>{
    console.log(res.data)
    setProductDetails(res.data)
  })
  .catch((error)=>{
    alert(error)
  });
 },[])

return (
    <div className="product-details">
    <section >
      <img src={productsdetails && productsdetails.image} width={"350px"} height={"100%"} alt="" />
    </section>
    <section className="details">
      <div>
        <h1 style={{color:"rgb(198, 34, 177)",marginBottom:"13px"}}>Products Details</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci sapiente earum, iste possimus, laborum voluptatem eligendi temporibus culpa atque eveniet fugit expedita repellendus similique quas, odit tempora eos sed.</p>
      <br/>
     
      <hr />
      <hr/>
      </div> 

      <div className="product-info">
        <dl>
          <div className="row">
            <dt >Name</dt>
            <span>:</span>
            <dd>{productsdetails && productsdetails.productName}</dd>

          </div>
           
            <div className="row">
            <dt>Price</dt>
              <span>:</span>
            <dd>₹{productsdetails && productsdetails.price}</dd>
            </div>

           <div className="row">
             <dt >Category</dt>
               <span>:</span>
            <dd>{productsdetails && productsdetails.category}</dd>
           </div>

            <div className="row description-row">
              <dt >Description</dt>
                <span>:</span>
            <dd>{productsdetails && productsdetails.paragraph}</dd>
            </div>

           <div className="btn">

  {/* BACK BUTTON FIXED */}
  <button onClick={() => navigate("/products")}>
    ⬅ Back To Products
  </button>

  {/* ADD TO CART FIXED */}
  <button
    onClick={() =>
      dispatch(
        addToCart({
          id: productsdetails?.id,
          name: productsdetails?.productName,
          price: productsdetails?.price,
          image: productsdetails?.image,
        })
      )
    }
  >
    🛒 Add To Cart
  </button>

</div>
        </dl>

      </div>
    </section>
    </div>
  );
}

export default ProductsDetails;