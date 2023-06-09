import GridView from './GridView';
import ListView from './ListView';
import useFilterContext from '../hooks/useFilterContext';

function ProductsList() {
  const { filtered_products: products, grid_view } = useFilterContext();

  // if there are no products after filtering
  if (products.length === 0) {
    return <h5>Sorry, no products match your search...</h5>;
  }

  // dynamically show one of these components depending on "grid_view" value
  if (!grid_view) return <ListView products={products} />;

  return <GridView products={products} />;
}

export default ProductsList;
