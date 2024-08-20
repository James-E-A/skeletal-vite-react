import { useState } from 'react';

const App = () => {
	const [titleText, setTitleText] = useState("bool");
	// hot module reloading will re-run this block of code,
	// but it will NOT restore the initial "bool" state, even temporarily
	console.debug({ titleText });
	setTimeout(() => {
		setTitleText("chungus");
	}, 1000);
	return [
		<title>{`Meme: ${titleText}`}</title>,
		<h1>WOW IT'S LESS THAN 50 SLOC IN THIS REPO</h1>,
		<p>(Probably... I didn't count it lol)</p>
	];
};

export default App;
