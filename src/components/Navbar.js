import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import useProductsContext from '../hooks/useProductsContext';
import useUserContext from '../hooks/useUserContext';

function Navbar() {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            {<FaBars />}
          </button>
        </div>

        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>

        <CartButtons />
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 17rem;
    }
  }

  .nav-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;

    svg {
      font-size: 3.2rem;
    }
  }
  .cart-btn-wrapper,
  .nav-links {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .cart-btn-wrapper {
      display: grid;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.8rem;
      }

      a {
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--clr-grey-3);
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;

        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
  }
`;

export default Navbar;
