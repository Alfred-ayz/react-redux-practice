import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
function HooksCakeContainer() {
	const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
	const dispatch = useDispatch();
	return (
		<div>
			<p>number of cake is : {numberOfCakes}</p>
			<button onClick={() => dispatch(buyCake())}>Buy cake</button>
		</div>
	);
}

export default HooksCakeContainer;
