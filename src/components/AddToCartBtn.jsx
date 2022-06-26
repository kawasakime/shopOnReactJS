import React from 'react';

const AddToCartBtn = ({ addToCartFunc, item}) => {
  return ( 
    <div className="add-to-cart" onClick={(e) => {addToCartFunc(item, e)}}>+</div>
   );
}
 
export default AddToCartBtn;