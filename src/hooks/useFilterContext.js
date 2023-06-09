import { useContext } from 'react';
import FilterContext from '../context/filterContext';

function useFilterContext() {
  return useContext(FilterContext);
}
export default useFilterContext;
