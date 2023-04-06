import Button from "../UI/Button";
import classes from "./MainHeader.module.scss";

const MainHeader = (props) => {
	return (
		<header className={classes.header}>
			<h1>ReduxCart</h1>
			<nav>
				<ul>
					<li>
						<Button title="My Cart" setBadge={true} />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
