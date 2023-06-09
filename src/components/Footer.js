import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()} <span> ComfySloth</span> All rights
        reserved
      </h5>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 10rem;
  background-color: var(--clr-black);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h5 {
    color: #fff;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  span {
    color: var(--clr-primary-5);
  }
`;

export default Footer;
