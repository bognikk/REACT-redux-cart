import classes from "./Button.module.scss";

const Button = ({ title, setBadge, clickHandler }) => {
	return (
		<button className={classes.button} onClick={clickHandler}>
			<span>{title}</span>
			{setBadge && <span className={classes.badge}>1</span>}
		</button>
	);
};

export default Button;
