import { useState } from 'react';

const App = () => {
	const [titleText, setTitleText] = useState("bool");
	// hot module reloading will re-run this block of code,
	// but it will NOT restore the initial "bool" state, even temporarily
	console.debug({ titleText });
	setTimeout(() => {
		setTitleText("chungus");
	}, 3000);
	return [
		<title key="title">{`Meme: ${titleText}`}</title>,
		<h1 key="h1">WOW IT'S LESS THAN 50 SLOC IN THIS REPO</h1>,
		<p key="p">(it's a bit over 50 if you include config files but <em>whatever</em>...)</p>
	];
};

export default App;
