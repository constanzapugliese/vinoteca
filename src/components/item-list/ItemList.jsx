import Item from './Item';

function ItemList({products}) {
    return (
        <>
            {products.map((product) => {
                return <Item key={product.id} product={product}/> 
                }
            )}
        </>
    )
}

export default ItemList;