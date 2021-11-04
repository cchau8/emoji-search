import React from "react";

const Search = ({ handleChange }) => {
	return (
		<header>
			<h1>😎 Emoji Search 😎</h1>
			<input
				type="text"
				placeholder="What emoji are you looking for ?"
				onChange={handleChange}
			/>
		</header>
	);
};

export default Search;
