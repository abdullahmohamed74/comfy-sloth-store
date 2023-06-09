import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import logo from '../images/logo.svg';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import useProductsContext from '../hooks/useProductsContext';
import useUserContext from '../hooks/useUserContext';

function Sidebar() {
  const { closeSidebar, isSidebarOpen } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout" onClick={closeSidebar}>
                ceckout
              </Link>
            </li>
          )}
        </ul>

        <CartButtons />
      </aside>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(-100%);
    background: var(--clr-white);
    transition: var(--transition);
    z-index: -1;
  }

  .show-sidebar {
    transform: translateX(0);
    z-index: 999;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 2.4rem;
  }

  .logo {
    justify-self: center;
    height: 45px;
  }

  .close-btn {
    font-size: 3.2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }

  .links {
    margin-bottom: 2rem;
  }

  .links a {
    display: block;
    text-align: left;
    font-size: 1.6rem;
    text-transform: capitalize;
    padding: 1.6rem 2.4rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1.6rem 2.4rem;
    padding-left: 3.2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
