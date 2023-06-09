import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import AmountButtons from './AmountButtons';
import { Link } from 'react-router-dom';
import useCartContext from '../hooks/useCartContext';

function AddToCart({ product }) {
  const { id, stock, colors } = product;
  const { addToCart } = useCartContext();
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const amountIncrease = () => {
    setAmount((current) => {
      if (current >= stock) return stock;
      return current + 1;
    });
  };

  const amountDecrease = () => {
    setAmount((current) => {
      if (current === 1) return 1;
      return current - 1;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                onClick={() => setMainColor(color)}
                className={
                  mainColor === color ? 'color-btn active' : 'color-btn'
                }
              >
                {mainColor === color && <FaCheck />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          amountIncrease={amountIncrease}
          amountDecrease={amountDecrease}
        />
        <Link
          to="/cart"
          className="btn add-to-cart"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 3.2rem;

  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;

    span {
      text-transform: capitalize;
      font-weight: 700;
    }

    div {
      display: flex;
    }
  }

  .color-btn {
    color: #fff;
    margin-right: 0.8rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: #222;
    border: none;
    cursor: pointer;
    opacity: 0.5;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 1.2rem;
      color: var(--clr-white);
    }
  }

  .active {
    opacity: 1;
  }

  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }

  .add-to-cart {
    text-align: center;
  }
`;

export default AddToCart;
