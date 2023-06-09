import { useState } from 'react';
import styled from 'styled-components';

function ProductImages({ images = [{ url: '' }] }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <Wrapper>
      <img src={mainImage.url} alt={mainImage.filename} className="main" />
      <div className="gallary">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMainImage(images[index])}
              className={image.url === mainImage.url ? 'active' : null}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .main {
    height: 60rem;
  }

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  .gallary {
    margin-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1.6rem;

    img {
      height: 10rem;
      cursor: pointer;
    }
  }

  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }

  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
