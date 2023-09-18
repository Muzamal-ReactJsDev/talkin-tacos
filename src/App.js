import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Productds from "./Components/Products/Products";
import Navbar from "./Components/Navbar/NavBar";
import Main from "./Components/OurStory/main";
import SignupForm from "./Components/Auth/SignUp/SignUp";
import LogInForm from "./Components/Auth/Login/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/LogIn" element={<LogInForm />} />
          <Route path="/SignUp" element={<SignupForm />} />
          <Route path="/" element={<Header />} />
          <Route path="/Products" element={<Productds />} />
          <Route path="/OurStory" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
