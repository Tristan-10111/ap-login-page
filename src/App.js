import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/Login/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path= "/" element={<LoginPage />} /> {/*show login page when route is active */}
				{/* <Route path = "/SignUpPage" element={<SignUpPage />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
