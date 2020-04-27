import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
	const [number, setNumber] = useState(1);
	return (
		<div>
			<h2>{props.numberOfCakes}</h2>
			<input
				type="text"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<button onClick={() => props.buyCake(number)}>
				Buy {number} Cake
			</button>
		</div>
	);
}
// step 1: map state to props function input state return state
const mapStateToProps = (state) => {
	return {
		numberOfCakes: state.cake.numberOfCakes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: (number) => {
			dispatch(buyCake(number));
		},
	};
};
// step 3 connect
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
