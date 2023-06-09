import styled from 'styled-components';

function CartColumns() {
  return (
    <Wrapper>
      <div className="content">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;

  .content {
    display: grid;
    grid-template-columns: 31.6rem 1fr 1fr 1fr auto;
    justify-items: center;
    column-gap: 1.6rem;
  }

  h5 {
    color: var(--clr-grey-5);
    font-weight: 400;
  }

  span {
    width: 3.2rem;
    height: 3.2rem;
  }

  hr {
    margin: 1.6rem 0 4.8rem 0;
  }

  @media screen and (min-width: 776px) {
    display: block;
  }
`;

export default CartColumns;
