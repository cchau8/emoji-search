import React from "react";

const Line = ({ title, symbol }) => {
	return (
		<li>
			<span>{symbol}</span> <span>{title}</span>
		</li>
	);
};

export default Line;
