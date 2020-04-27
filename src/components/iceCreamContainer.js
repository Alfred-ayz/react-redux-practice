import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
	return (
		<div>
			<h2>number of iceCream is : {props.numOfIceCreams}</h2>
			<button onClick={props.buyIceCream}>Buy icecream</button>
		</div>
	);
}
// step 1: map state to props function input state return state
const mapStateToProps = (state) => {
	return {
		numOfIceCreams: state.iceCream.numOfIceCreams,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyIceCream: () => {
			dispatch(buyIceCream());
		},
	};
};
// step 3 connect
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
