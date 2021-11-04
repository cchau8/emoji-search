import React from "react";

const Line = ({ title, symbol }) => {
	return (
		<div>
			<span>{symbol}</span> <span>{title}</span>
		</div>
	);
};

export default Line;
