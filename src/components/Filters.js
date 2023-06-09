import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import useFilterContext from './../hooks/useFilterContext';
import { getUniqueValues } from '../utils/helpers';
import { formatPrice } from '../utils/helpers';

function Filters() {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    all_products,
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* text */}
          <div className="form-control">
            <input
              type="text"
              placeholder="search"
              className="search-input"
              name="text"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of text */}
          {/* categories */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((categoryItem, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    name="category"
                    onClick={updateFilters}
                    className={
                      category === categoryItem.toLowerCase() ? 'active' : null
                    }
                  >
                    {categoryItem}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* company */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {companies.map((companyItem, index) => {
                return (
                  <option key={index} value={companyItem}>
                    {companyItem}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of company */}
          {/* colors */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((colorItem, index) => {
                if (colorItem === 'all') {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === 'all' ? 'all-btn active' : 'all-btn'
                      }`}
                    >
                      all
                    </button>
                  );
                }

                return (
                  <button
                    key={index}
                    style={{ background: colorItem }}
                    name="color"
                    data-color={colorItem}
                    onClick={updateFilters}
                    className={`${
                      color === colorItem ? 'color-btn active' : 'color-btn'
                    }`}
                  >
                    {color === colorItem && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              value={price}
              onChange={updateFilters}
              min={min_price}
              max={max_price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              id="shipping"
              name="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button className="clear-btn" type="button" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 2rem;
    h5 {
      margin-bottom: 0.8rem;
    }
  }

  .search-input {
    padding: 0.8rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }

  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.4rem 0;
    padding: 0.4rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  .active {
    border-color: var(--clr-grey-5);
  }

  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.4rem;
  }

  .colors {
    display: flex;
    align-items: center;
  }

  .color-btn {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.8rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 0.8rem;
      color: var(--clr-white);
    }
  }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.8rem;
    opacity: 0.5;
  }

  .active {
    opacity: 1;
  }

  .all-btn .active {
    text-decoration: underline;
  }

  .price {
    margin-bottom: 0.4rem;
  }

  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1.6rem;
    max-width: 200px;
  }

  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.4rem 0.8rem;
    border-radius: var(--radius);
  }
`;

export default Filters;
