import { useState } from 'react';

const App = () => {
	const [titleText, setTitleText] = useState("Meme");
	setTimeout(() => {
		setTitleText("chungus");
	}, 1000);
	return [
		<title>{titleText}</title>,
		<h1>WOW IT'S LESS THAN 50 SLOC IN THIS REPO</h1>,
		<p>(Probably... I didn't count it lol)</p>
	];
};

export default App;
