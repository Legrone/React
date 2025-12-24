import Item from './Item'
import ItemsLayout from './IitemsLayout'

function ItemList({ items }) {
  return (
    <ItemsLayout>
      {items.map(prod => <Item key={prod.id} prod={prod}/>)}
    </ItemsLayout>
  );
}

export default ItemList;
