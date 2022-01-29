import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import RandomMeal from "./components/RandomMeal/RandomMeal";
import HomePage from "../src/components/Home/HomePage";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/categories" component={Categories} />
					<Route exact path="/random" component={RandomMeal} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
