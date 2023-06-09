import { createContext, useReducer, useEffect } from 'react';
import useProductsContext from '../hooks/useProductsContext';
import filterReducer from '../reducers/filterReducer';
import {
  LOADING_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../utils/actions';

const FilterContext = createContext();

function FilterProvider({ children }) {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filterReducer, {
    all_products: [],
    filtered_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
      text: '',
      company: 'all',
      category: 'all',
      color: 'all',
      min_price: 0,
      max_price: 0,
      price: 0,
      shipping: false,
    },
  });

  // update the "all_products" and "filtered_products" states
  // with a copy of products that comes from the API
  useEffect(() => {
    dispatch({ type: LOADING_PRODUCTS, payload: products });
  }, [products]);

  // each time the user select an option from the select input
  // each time the user select a filter input
  // update the "filtered_products" state with a new "sorted" array
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  // update the "sort" state with the option that the user select
  const updateSort = (e) => {
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  };

  // change "grid_view" to true
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  // change "grid_view" to false
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  // update the "filters" state with the value that the user enter
  // called on change event on the filter inputs
  const updateFilters = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'category') {
      value = e.target.textContent;
    }

    if (name === 'color') {
      value = e.target.dataset.color;
    }

    if (name === 'price') {
      value = Number(value);
    }

    if (name === 'shipping') {
      value = e.target.checked;
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterProvider };
export default FilterContext;
