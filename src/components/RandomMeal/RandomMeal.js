import React, { useEffect, useContext } from "react";
import { myContext } from "../Context/Context";
import './RandomMeal.scss';

const RandomMeal = () => {
	const { randomMeal, fetchRandomMeal } = useContext(myContext);

	useEffect(() => {
		fetchRandomMeal();
	}, [fetchRandomMeal]);
	return (
		<div className="random">
			{randomMeal.map((meal) => (
				<div key={meal.idmeal} className="random-grid" >
					<div  className="random-grid-controls">
						<img src={meal.strMealThumb} alt="#" />
						<button onClick={fetchRandomMeal} >Generate Another Meal</button>
					</div>

					<div className="random-grid-instructions" >
						<h2>Instructions</h2>
						<p>{meal.strInstructions} </p>
					</div>
				</div>
			))}
		</div>
	);
};

export default RandomMeal;
