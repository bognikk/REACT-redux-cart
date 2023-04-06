import classes from "./Button.module.scss";

const Button = ({ title, setBadge }) => {
	return (
		<button className={classes.button}>
			<span>{title}</span>
			{setBadge && <span className={classes.badge}>1</span>}
		</button>
	);
};

export default Button;
