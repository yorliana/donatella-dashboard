import { useState } from 'react';
import img from '../../assets/img/seccionVI/donutsLover.png'
import style from './Productos.module.css'
import { useNavigate } from "react-router-dom";

export const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
	setShowForm,
}) => {

	const [active, setActive] = useState(false);

	// Eliminar producto del carrito
	const onDeleteProduct = product => {
		const results = allProducts.filter(item => item.id !== product.id);
		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	// Vaciar carrito
	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	// Aumentar cantidad de un producto
	const onIncreaseQuantity = product => {
		const updated = allProducts.map(item =>
			item.id === product.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);

		setAllProducts(updated);
		setCountProducts(countProducts + 1);
		setTotal(total + product.price);
	};

	// Disminuir cantidad de un producto
	const onDecreaseQuantity = product => {
		if (product.quantity === 1) return;

		const updated = allProducts.map(item =>
			item.id === product.id
				? { ...item, quantity: item.quantity - 1 }
				: item
		);

		setAllProducts(updated);
		setCountProducts(countProducts - 1);
		setTotal(total - product.price);
	};
const navigate = useNavigate();
	return (
		<header className={style.header}>
			<img className={style.img1} src={img} alt="logo"   onClick={() => navigate("/")} />

			<div className={style.containericon}>
				<div className={style.containercarticon} onClick={() => setActive(!active)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className={style.iconcart}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className={style.countproducts}>
						<span id={style.contadorproductos}>{countProducts}</span>
					</div>
				</div>

				<div className={`${style.containerCartProducts} ${active ? '' : style.hiddencart}`}>
					{allProducts.length ? (
						<>
							<div className={style.rowproduct}>
								{allProducts.map(product => (
									<div className={style.cartproduct} key={product.id}>
										<div className={style.infocartproduct}>
											<p className={style.tituloproductocarrito}>
												{product.nameProduct}
											</p>
											<span className={style.precioproductocarrito}>
												${product.price}
											</span>
											<div className={style.quantitycontrols}>
												<button onClick={() => onDecreaseQuantity(product)}>-</button>
												<span>{product.quantity}</span>
												<button onClick={() => onIncreaseQuantity(product)}>+</button>
											</div>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className={style.iconclose}
											onClick={() => onDeleteProduct(product)}
										>
											<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'/>
										</svg>
									</div>
								))}
							</div>

							<div className={style.carttotal}>
								<h3>Total:</h3>
								<span className={style.totalpagar}>${total.toFixed(2)}</span>
							</div>

							<button className={style.btnclearall} onClick={onCleanCart}>Vaciar Carrito</button>
							<button className={style.btnclearall} onClick={() => setShowForm(true)}>Comprar</button>
						</>
					) : (
						<p className={style.cartempty}>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};