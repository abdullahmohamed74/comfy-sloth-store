import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import useCartContext from '../hooks/useCartContext';

function CartContent() {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className="page section section-center">
      <CartColumns />
      {cart.map((cartItem) => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button onClick={clearCart} className="link-btn clear-btn">
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 3.2rem;
  }

  .link-btn {
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.4rem 0.8rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }

  .clear-btn {
    background: var(--clr-black);
  }
`;

export default CartContent;
