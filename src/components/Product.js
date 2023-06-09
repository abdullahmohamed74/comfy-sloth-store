import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../utils/helpers';

function Product({ id, name, image, price }) {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .container {
    position: relative;
    overflow: hidden;
    background: var(--clr-black);
    border-radius: var(--radius);
  }

  img {
    width: 100%;
    height: 225px;
    display: block;
    object-fit: cover;
    transition: var(--transition);
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    background-color: var(--clr-primary-5);
    transition: var(--transition);
    opacity: 0;

    svg {
      font-size: 2rem;
      color: var(--clr-white);
    }
  }

  .container:hover img {
    opacity: 0.5;
  }

  .container:hover .link {
    opacity: 1;
  }

  footer {
    margin-top: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;

export default Product;
