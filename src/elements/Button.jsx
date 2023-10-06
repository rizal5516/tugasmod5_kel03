// import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();

	const handleClick = () => {
		if (location.pathname === "/") {
			navigate("/page2");
		} else {
			navigate("/");
		}
	};

	const buttonText = location.pathname === "/" ? "Next Page" : "Go Back";

	return <button onClick={handleClick}>{buttonText}</button>;
}

export default Navbar;
