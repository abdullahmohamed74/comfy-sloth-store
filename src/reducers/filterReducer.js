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

function filterReducer(state, action) {
  if (action.type === LOADING_PRODUCTS) {
    const prices = action.payload.map((product) => product.price);
    const maxPrice = Math.max(...prices);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let updatedProducts;

    if (sort === 'price-lowest') {
      updatedProducts = [...filtered_products].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === 'price-highest') {
      updatedProducts = [...filtered_products].sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === 'name-a') {
      updatedProducts = [...filtered_products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sort === 'name-z') {
      updatedProducts = [...filtered_products].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return { ...state, filtered_products: updatedProducts };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, company, category, color, price, shipping } = state.filters;
    let updatedProducts = [...all_products];
    // filtering
    // 1) text
    if (text) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }

    // 2) category
    if (category !== 'all') {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    // 3) company
    if (company !== 'all') {
      updatedProducts = updatedProducts.filter(
        (product) => company.category === company
      );
    }

    // 4) color
    if (color !== 'all') {
      updatedProducts = updatedProducts.filter((product) => {
        return product.colors.some((col) => col === color);
      });
    }

    // 5) shipping
    if (shipping) {
      updatedProducts = updatedProducts.filter((product) => {
        return product.shipping === true;
      });
    }

    // 6) price
    updatedProducts = updatedProducts.filter((product) => {
      return product.price <= price;
    });

    return { ...state, filtered_products: updatedProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  throw new Error(`NO matching "${action.type} - action type"`);
}
export default filterReducer;
