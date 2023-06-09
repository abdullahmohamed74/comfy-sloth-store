import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useCartContext from '../hooks/useCartContext';
import { formatPrice } from '../utils/helpers';
import useUserContext from './../hooks/useUserContext';

function CartTotals() {
  const { total_price, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal: <span>{formatPrice(total_price)}</span>
          </h5>
          <p>
            shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            total order: <span>{formatPrice(total_price + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link className="btn" to="/checkout">
            proceed to checkout
          </Link>
        ) : (
          <button className="btn" onClick={loginWithRedirect}>
            login
          </button>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 4.8rem;

  @media screen and (min-width: 776px) {
    justify-content: flex-end;
  }

  article {
    padding: 2.5rem 5rem;
    border: solid 1px var(--clr-grey-8);
    border-radius: var(--radius);
  }
  p,
  h4,
  h5 {
    display: grid;
    grid-template-columns: 200px 1fr;
  }

  p {
    text-transform: capitalize;
  }

  h4 {
    margin-top: 3.2rem;
  }

  .btn {
    width: 100%;
    margin-top: 1.6rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
