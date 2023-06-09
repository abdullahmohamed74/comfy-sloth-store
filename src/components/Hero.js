import { Link } from 'react-router-dom';
import styled from 'styled-components';
import herobc1 from '../images/hero-bcg.jpeg';
import herobc2 from '../images/hero-bcg-2.jpeg';

function Hero() {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Design Your <br />
          Comfort Zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link className="btn hero-btn" to="/products">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={herobc1} alt="nice table" className="main-img" />
        <img src={herobc2} alt="a man working" className="accent-img" />
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  gap: 8rem;
  align-items: center;

  .img-container {
    display: none;
  }

  h1 {
    margin-bottom: 3.2rem;
  }

  p {
    font-size: 2rem;
    line-height: 2;

    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
  }

  .hero-btn {
    padding: 1.2rem 2.4rem;
    font-size: 1.6rem;
  }

  @media screen and (min-width: 992px) {
    height: calc(100vh - 8rem);
    grid-template-columns: 1fr 1fr;

    .img-container {
      display: block;
      position: relative;
    }

    .main-img {
      width: 100%;
      height: 550px;
      object-fit: cover;
      border-radius: 5px;
    }

    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }

    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
      z-index: -1;
    }
  }
`;
export default Hero;
