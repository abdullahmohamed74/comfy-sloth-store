import styled from 'styled-components';
import Product from './Product';

function GridView({ products }) {
  return (
    <Wrapper>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 3rem;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default GridView;
