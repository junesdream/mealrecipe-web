import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContext } from '../src/components/Context/Context'

ReactDOM.render(
	<React.StrictMode>
		<AppContext>
			<App />
		</AppContext>
	</React.StrictMode>,
	document.getElementById("root")
);


// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// import { AppContext } from "./components/Context/Context";
// ReactDOM.render(
// 	<React.StrictMode>
// 		<AppContext>
// 			<App />
// 		</AppContext>
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );


