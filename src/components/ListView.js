import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

function ListView({ products }) {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, name, image, description, price } = product;
        return (
          <div key={id}>
            <article>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <h5 className="price">{formatPrice(price)}</h5>
                <p>{description.substring(0, 150)}...</p>
                <Link to={`/products/${id}`} className="btn">
                  Details
                </Link>
              </div>
            </article>
            <hr />
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    display: block;
    width: 30rem;
    height: 20rem;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.8rem;
  }

  .price {
    color: var(--clr-primary-6);
    margin-bottom: 1.2rem;
  }

  p {
    max-width: 45em;
    margin-bottom: 1.6rem;
  }

  .btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  article {
    display: grid;
    align-items: center;
    gap: 3rem;
  }

  @media screen and (min-width: 992px) {
    article {
      grid-template-columns: auto 1fr;
    }
  }
`;

export default ListView;
