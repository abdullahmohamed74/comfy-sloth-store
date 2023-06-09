import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ErrorPage() {
  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: calc(100vh - 18rem);
  background-color: var(--clr-primary-10);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 10rem;
  }

  h3 {
    text-transform: none;
    margin-bottom: 3rem;
  }
`;

export default ErrorPage;
