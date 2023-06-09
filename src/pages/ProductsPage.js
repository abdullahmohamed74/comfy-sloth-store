import styled from 'styled-components';
import { Sort, ProductsList, Filters, PageHero } from '../components';

function ProductsPage() {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductsList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
