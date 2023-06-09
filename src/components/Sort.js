import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import useFilterContext from '../hooks/useFilterContext';

function Sort() {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          onClick={setGridView}
          className={`${grid_view ? 'active' : null}`}
        >
          <BsFillGridFill />
        </button>
        <button onClick={setListView} className={!grid_view ? 'active' : null}>
          <BsList />
        </button>
      </div>

      <p>{products.length} products found</p>

      <hr />

      <form>
        <label htmlFor="sort">Sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  margin-bottom: 3.2rem;
  row-gap: 1.2rem;

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.8rem;
    width: 5rem;

    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      border-radius: var(--radius);
      width: 2.4rem;
      height: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        font-size: 1.6rem;
      }
    }

    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .sort-input {
    border-color: transparent;
    font-size: 1.6rem;
    text-transform: capitalize;
    padding: 0.4rem 0.8rem;
  }

  label {
    font-size: 1.6rem;
    text-transform: capitalize;
  }

  @media (min-width: 576px) {
    grid-template-columns: auto auto 1fr auto;
    column-gap: 3.2rem;
  }
`;

export default Sort;
