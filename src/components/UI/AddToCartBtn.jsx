import React from 'react';
import './AddToCartBtn.css'

const AddToCartBtn = ({ addToCartFunc, item}) => {
  return ( 
    <div className="add-to-cart" onClick={(e) => {addToCartFunc(item, e)}}>+</div>
   );
}
 
export default AddToCartBtn;