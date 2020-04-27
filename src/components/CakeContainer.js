import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
	return (
		<div>
			<h2>{props.numberOfCakes}</h2>
			<button onClick={props.buyCake}>Buy Cake</button>
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
		buyCake: () => {
			dispatch(buyCake());
		},
	};
};
// step 3 connect
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
