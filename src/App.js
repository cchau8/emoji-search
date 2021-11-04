import "./App.css";
import { useState } from "react";
import emojis from "./assets/emojis.json";
import Search from "./components/Search";
import Line from "./components/Line";

function App() {
	const [match, setMatch] = useState([]);

	const handleChange = (e) => {
		setMatch([]);
		for (let i = 0; i < emojis.length; i++) {
			if (emojis[i].keywords.includes(e.target.value.toLowerCase()) && match.length < 21) {
				setMatch((prevState) => [...prevState, emojis[i]]);
			}
		}
	};

	return (
		<div>
			<Search handleChange={handleChange} />
			{match.map((el, i) => {
				const lineArr = [];
				if (i < 20) {
					lineArr.push(<Line key={i} title={el.title} symbol={el.symbol} />);
				}
				return lineArr;
			})}
		</div>
	);
}

export default App;
