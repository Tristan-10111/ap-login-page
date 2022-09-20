import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavigationBar/Navbar";
import LoginPage from "./components/Authentication/Login/LoginPage";
import SignUpPage from "./components/Authentication/SignUp/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
		<Navbar />
			<Routes>
				<Route path= "/" element={<LoginPage />} />
				<Route path = "/SignUpPage" element={<SignUpPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
