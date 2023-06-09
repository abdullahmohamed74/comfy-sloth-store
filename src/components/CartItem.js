import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { formatPrice } from './../utils/helpers';
import AmountButtons from './AmountButtons';
import useCartContext from '../hooks/useCartContext';

function CartItem({ id, color, amount, name, image, price }) {
  const { removeCartItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, 'inc');
  };

  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color: <span style={{ background: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons
        amount={amount}
        amountIncrease={increase}
        amountDecrease={decrease}
      />
      <h5 className="subtotal">{formatPrice(amount * price)}</h5>
      <button onClick={() => removeCartItem(id)} className="remove-btn">
        <FaTrash />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  justify-items: center;
  align-items: center;
  gap: 4.8rem 1.6rem;
  margin-bottom: 4.8rem;

  .subtotal {
    display: none;
  }

  .price {
    display: none;
  }

  .title {
    display: grid;
    grid-template-columns: 75px 125px;
    grid-template-rows: 75px;
    align-items: center;
    gap: 1.6rem;
    text-align: left;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
  }

  h5 {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      background: red;
      margin-left: 0.8rem;
      border-radius: var(--radius);
    }
  }

  .price-small {
    color: var(--clr-primary-5);
  }

  .amount-btns {
    width: 75px;

    button {
      width: 1.6rem;
      height: 0.8rem;
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1.6rem;
    }
  }

  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 1.2rem;
    cursor: pointer;
  }

  @media screen and (min-width: 776px) {
    grid-template-columns: repeat(4, 1fr) auto;

    .title {
      grid-template-columns: 100px 200px;
    }

    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1.6rem;
    }

    .price {
      display: block;
      font-size: 1.6rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }

    .price-small {
      display: none;
    }

    .name {
      font-size: 1.4rem;
    }

    .color {
      font-size: 1.4rem;

      span {
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    .amount-btns {
      width: 100px;

      button {
        width: 2.4rem;
        height: 1.6rem;
        font-size: 1.6rem;
      }

      h2 {
        font-size: 2.4rem;
      }
    }
  }
`;

export default CartItem;
