import Button from "../UI/Button";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

import classes from "./MainHeader.module.scss";

const MainHeader = (props) => {
	const dispatch = useDispatch();
	const cartQuantity = useSelector((state) => state.cart.totalQuantity);

	const toggleCartHandler = () => {
		dispatch(uiActions.toggle());
	};

	return (
		<header className={classes.header}>
			<h1>ReduxCart</h1>
			<nav>
				<ul>
					<li>
						<Button
							title="My Cart"
							setBadge={true}
							clickHandler={toggleCartHandler}
							quantity={cartQuantity}
						/>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
