import React, { useState, useCallback, useContext } from "react";
import "./HomePage.scss";
import { myContext } from "../Context/Context";

const HomePage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	// console.log(searchTerm);

	const { fetchHomePageMeals, meals } = useContext(myContext);

	const fetchMealsHandler = useCallback(() => {
		fetchHomePageMeals(searchTerm);
	}, [searchTerm, fetchHomePageMeals]);


	return (
		<div className="home">
			<div className="home-search">
				<input
					type="text"
					placeholder="Type a meal name..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button onClick={fetchMealsHandler}>Search Meal</button>
			</div>

			<div className="home-grid">
				{meals ? (
					meals.map((meal) => (
						<div className="home-meal" key={meal.idMeal}>
							<img src={meal.strMealThumb} alt="#" />
							<h4>{meal.strMeal} </h4>
						</div>
					))
				) : (
					<h2>No meals found. Try another name</h2>
				)}
			</div>
		</div>
	);
};

export default HomePage;
