import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useCartContext from '../hooks/useCartContext';
import { PageHero, CartContent } from '../components';

function CartPage() {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <Wrapper>
        <div className="empty">
          <h2>your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <PageHero title="cart" />
      <CartContent />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .empty {
    min-height: calc(100vh - 18rem);
    padding: 8rem 0;
    text-align: center;

    h2 {
      margin-bottom: 1.6rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
