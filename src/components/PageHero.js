import { Link } from 'react-router-dom';
import styled from 'styled-components';

function PageHero({ title, product }) {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">home</Link>
          {product && <Link to="/products">/ products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 20vh;
  background-color: var(--clr-primary-10);
  color: var(--clr-primary-1);

  display: flex;
  align-items: center;

  a {
    color: var(--clr-primary-3);
    padding: 0.8rem;
    transition: all 0.3s;
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;
export default PageHero;
