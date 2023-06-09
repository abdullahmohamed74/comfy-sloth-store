import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

function AmountButtons({ amount, amountIncrease, amountDecrease }) {
  return (
    <Wrapper className="amount-btns">
      <button onClick={amountDecrease}>
        <FaMinus />
      </button>
      <h2>{amount}</h2>
      <button onClick={amountIncrease}>
        <FaPlus />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  h2 {
    margin-bottom: 0;
  }

  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default AmountButtons;
