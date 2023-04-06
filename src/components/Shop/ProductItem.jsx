import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./ProductItem.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = ({ title, price, description, id }) => {
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(
			cartActions.addItemToCart({
				id,
				title,
				price,
			})
		);
	};

	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<Button title={"Add to Cart"} clickHandler={addToCartHandler} />
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
