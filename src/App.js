import React from "react";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<CakeContainer />
				<HooksCakeContainer />
				<IceCreamContainer />
				<HooksIceCreamContainer />
				<NewCakeContainer />
			</div>
		</Provider>
	);
}

export default App;
