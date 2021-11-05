import React from "react";
import { useState } from "react";
const Line = ({ title, symbol }) => {
	const [display, setDisplay] = useState(false);
	return (
		<li>
			<button
				onClick={() => {
					navigator.clipboard.writeText(symbol);
					setDisplay(true);
				}}
			>
				<div className="emoji">
					<span>{symbol}</span> <span>{title}</span>
				</div>
				{display ? (
					<span>Copied to your clipboard !</span>
				) : (
					<span className="click-hover">Click to copy !</span>
				)}
			</button>
		</li>
	);
};

export default Line;
