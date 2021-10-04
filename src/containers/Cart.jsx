import { useCartContext } from '../context/CartContext';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Cart() {
    const { cart, removeItemCart, addProductCart, deleteCart, iconCart, priceWithDiscount, totalPriceCart, totalInstallmentCart } = useCartContext()
    // const [newCount, setNewCount] = useState(null)
    // const [buttonsActive, setButtonsActive] = useState([])
    return (
        <div className="offcanvas offcanvas-end cartWidget" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h4 className="offcanvas-title" id="offcanvasRightLabel"><b>Carrito de compras</b></h4>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {cart.length > 0 ?
                    <>
                    {cart.map((e) =>
                        <>
                        <div key={e.product.id} className="container-fluid mb-2">
                            <div className="row g-0">
                                <section className="col-3">
                                    <Link to={`/products/${e.product.id}`}>
                                        <img src={e.product.img} className="img-fluid" alt={e.product.title} />
                                    </Link>
                                </section>
                                <section className="col-8">
                                    <h4>
                                        <Link to={`/products/${e.product.id}`}>
                                            {e.product.title}
                                        </Link>
                                    </h4>
                                    <h5><b>${e.product.discount > 0 ? priceWithDiscount(e.product) : e.product.price}</b></h5>
                                    {/* <button type="button" className="btn btn-dark rounded-circle countButton" onClick={newCount > e.product.stock ? setButtonsActive(false) : addProductCart(e, newCount)} abled={buttonsActive}>-</button>
                                    <span className="mx-2">{setNewCount(e.quantity)}</span>
                                    <button type="button" className="btn btn-dark rounded-circle countButton" onClick={newCount <= e.product.stock ? setButtonsActive(false) : setNewCount(newCount - 1)} abled={buttonsActive}>+</button> */}
                                </section>
                                <section className="col-1">
                                    <button className="btn border-0 p-0" type="button" onClick={() => removeItemCart(e.product.id)}><BsTrash /></button>
                                </section>
                            </div>
                        </div>
                        {/* <hr />
                        <div className="d-flex flex-column justify-content-end align-items-end">
                            <button className="btn btn-dark text-uppercase mb-3" type="button" onClick={deleteCart}>Vaciar</button>
                            <h4><b>Subtotal</b> ({iconCart()} {iconCart() === 1 ? 'producto': 'productos'})<b>: ${totalPriceCart(e.product)}</b></h4>
                            <h5>0 hasta 6 cuotas sin interés de ${totalInstallmentCart()}</h5>
                        </div> */}
                        </>
                    )}
                    <hr />
                    <div className="d-flex flex-column justify-content-end align-items-end">
                        <button className="btn btn-dark text-uppercase mb-3" type="button" onClick={deleteCart}>Vaciar</button>
                        <h4><b>Subtotal</b> ({iconCart()} {iconCart() === 1 ? 'producto': 'productos'})<b>: ${totalPriceCart()}</b></h4>
                        <h5>0 hasta 6 cuotas sin interés de ${totalInstallmentCart()}</h5>
                    </div>
                    <div className="text-center">
                        <Link to="/buy">
                            <button className="btn btn-dark text-uppercase my-3" type="button" data-bs-dismiss="offcanvas" aria-label="Close">Iniciar compra</button>
                        </Link>
                        <p><Link to="/products" data-bs-dismiss="offcanvas" aria-label="Close">Ver más productos</Link></p>
                    </div>
                    </>
                : <h5>Tu carrito de compras está vacío :(</h5>}
            </div>
        </div>
    )
}

export default Cart;