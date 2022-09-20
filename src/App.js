import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/Authentication/Login/LoginPage";
import SignUpPage from "./components/Authentication/SignUp/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path= "/" element={<LoginPage />} />
				<Route path = "/SignUpPage" element={<SignUpPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
