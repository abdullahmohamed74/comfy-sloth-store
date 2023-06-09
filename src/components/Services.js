import styled from 'styled-components';
import { services } from '../utils/constants';

function Services() {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            Custom Furniture
            <br />
            Built Only For You
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>

        <div className="services-center">
          {services.map((service) => {
            const { icon, id, title, text } = service;
            return (
              <article key={id} className="service">
                <span>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 8rem 0;
  background: var(--clr-primary-10);

  h3,
  h4 {
    color: var(--clr-primary-1);
  }

  .header h3 {
    margin-bottom: 3.2rem;
  }

  p {
    line-height: 2;
    color: var(--clr-primary-3);
  }

  .services-center {
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    margin-top: 3rem;
  }

  .service {
    text-align: center;
    padding: 4rem 3rem;
    background-color: var(--clr-primary-7);
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 3rem;
    }
  }

  @media screen and (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
