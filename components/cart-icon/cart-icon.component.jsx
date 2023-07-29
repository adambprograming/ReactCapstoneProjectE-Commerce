import './cart-icon.styles.scss'

import Image from "next/image";
import ShoppingIcon from '../../assets/shopping-bag.svg'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
      <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <Image src={ShoppingIcon} alt="CartIcon" className='shopping-icon'/>
        <span className='item-count'>0</span>
      </div>
    );
  };
  
  export default CartIcon;