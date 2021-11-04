import "./App.css";
import { useState } from "react";
import emojis from "./assets/emojis.json";
import Search from "./components/Search";
import Line from "./components/Line";

function App() {
	const [match, setMatch] = useState([0]);

	const handleChange = (e) => {
		const newTab = [];
		for (let i = 0; i < emojis.length; i++) {
			if (emojis[i].keywords.includes(e.target.value.toLowerCase()) && newTab.length < 20) {
				newTab.push(emojis[i]);
			}
		}
		setMatch(newTab);
	};

	return (
		<div className="container">
			<Search handleChange={handleChange} />
			<ul>
				{match[0] === 0
					? emojis.slice(0, 20).map((el, i) => {
							return <Line key={i} title={el.title} symbol={el.symbol} />;
					  })
					: match.map((el, i) => {
							return <Line key={i} title={el.title} symbol={el.symbol} />;
					  })}
			</ul>
		</div>
	);
}

export default App;
