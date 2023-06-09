import axios from 'axios';
import { createContext, useCallback, useEffect, useReducer } from 'react';
import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../utils/actions';
import productsReducer from '../reducers/productsReducer';
import {
  products_url as productsUrl,
  single_product_url as singleProductUrl,
} from '../utils/constants';

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, {
    isSidebarOpen: false,
    // total products
    products_loading: false,
    products_error: null,
    products: [],
    featured_products: [],
    // single product
    single_product_loading: false,
    single_product_error: null,
    single_product: {},
  });

  // function to open the sidebar
  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  // function to close the sidebar
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  // fetch total products
  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const res = await axios.get(productsUrl);
      const products = res.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error });
    }
  };

  // fetch single product
  const fetchSingleProduct = useCallback(async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const res = await axios.get(`${singleProductUrl}${id}`);
      const singleProduct = res.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR, payload: error });
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider };
export default ProductsContext;
