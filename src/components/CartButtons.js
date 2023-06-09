import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useProductsContext from './../hooks/useProductsContext';
import useCartContext from '../hooks/useCartContext';
import useUserContext from './../hooks/useUserContext';

function CartButtons() {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { myUser, logout, loginWithRedirect } = useUserContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>

      {myUser ? (
        // logout button
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          type="button"
          className="auth-btn"
        >
          logout
          <FaUserMinus />
        </button>
      ) : (
        // login button
        <button onClick={loginWithRedirect} type="button" className="auth-btn">
          login
          <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 22.5rem;

  .cart-btn {
    font-size: 2.4rem;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }

  .cart-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 2rem;
      margin-left: 0.5rem;
    }
  }

  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1rem;
    color: var(--clr-white);
    padding: 1.2rem;
  }

  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 2.4rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;

export default CartButtons;
