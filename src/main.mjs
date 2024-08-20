import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App.jsx'

const root = ReactDOM.createRoot(document.querySelector('body')); // this isn't best practice but I also don't care
root.render(React.createElement(App));
console.debug(root);
