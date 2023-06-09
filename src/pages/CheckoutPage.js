import styled from 'styled-components';
import useCartContext from '../hooks/useCartContext';
import { PageHero, StripeCheckout } from '../components';
import { Link } from 'react-router-dom';

function CheckoutPage() {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page section section-center">
        {cart.length === 0 ? (
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .empty {
    text-align: center;
  }
`;

export default CheckoutPage;
