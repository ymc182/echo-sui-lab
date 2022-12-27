import Application from "./features/Application/Application";
import { Route, Routes } from "react-router-dom";
import Home from "./features/Home/Home";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/application" element={<Application />} />
		</Routes>
	);
}

export default App;
