import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

function Stars({ stars, reviews }) {
  const renderedStars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{renderedStars}</div>
      <p>({reviews} customer reviews)</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  span {
    color: #ffb900;
    font-size: 1.6rem;
  }

  span:not(:last-child) {
    margin-right: 0.5rem;
  }

  p {
    margin: 0;
    margin-left: 1rem;
  }
`;

export default Stars;

// set the stars manually 
function StarsManual({ stars, reviews }) {
  return (
    <Wrapper>
      <div className="stars">
        {/* star */}
        <span>
          {stars >= 1 ? (
            <BsStarFill />
          ) : stars >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars >= 2 ? (
            <BsStarFill />
          ) : stars >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars >= 3 ? (
            <BsStarFill />
          ) : stars >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars >= 4 ? (
            <BsStarFill />
          ) : stars >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars === 5 ? (
            <BsStarFill />
          ) : stars >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}
      </div>
      <p>({reviews} customer reviews)</p>
    </Wrapper>
  );
}

export { StarsManual };
