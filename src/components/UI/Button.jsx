import classes from "./Button.module.scss";

const Button = ({ title, setBadge, clickHandler, quantity }) => {
	return (
		<button className={classes.button} onClick={clickHandler}>
			<span>{title}</span>
			{setBadge && <span className={classes.badge}>{quantity}</span>}
		</button>
	);
};

export default Button;
