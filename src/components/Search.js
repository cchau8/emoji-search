import React from "react";

const Search = ({ handleChange }) => {
	return (
		<div>
			<h1>😎 EmojiSearch 😎</h1>
			<input
				type="text"
				placeholder="What emoji are you looking for ?"
				onChange={handleChange}
			/>
		</div>
	);
};

export default Search;
