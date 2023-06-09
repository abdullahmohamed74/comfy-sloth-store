import styled from 'styled-components';
import useProductsContext from '../hooks/useProductsContext';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';
import { Link } from 'react-router-dom';

function FeaturedProducts() {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="featured section-center">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <div className="btn-container">
        <Link to="/products" className="btn">
          all products
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--clr-grey-10);

  .featured {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 4rem;
  }

  .btn-container {
    margin-top: 4.8rem;
    text-align: center;
  }
`;

export default FeaturedProducts;
