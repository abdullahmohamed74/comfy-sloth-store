import { useContext } from 'react';
import ProductsContext from '../context/productsContext';

function useProductsContext() {
  return useContext(ProductsContext);
}
export default useProductsContext;
