import { Link } from "react-router-dom";
import ConnectionBtn from "../ConnectionButton/ConnectionBtn";
import "./Header.scss";

export default function Header() {
	return (
		<div className="app_header">
			<div className="app_header-logo">
				<Link to="/">
					<img src="/ECHO-light.png" alt="logo" />
				</Link>
			</div>
			<ConnectionBtn />
		</div>
	);
}
