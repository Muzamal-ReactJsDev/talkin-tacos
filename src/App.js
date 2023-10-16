import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Productds from "./Components/Products/Products";
import Navbar from "./Components/Navbar/NavBar";
import Main from "./Components/OurStory/main";
import Payment from "./Components/Payment/Payment.js"
import PaymentCardList from "./Components/Payment/PaymentCardList";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Products" element={<Productds />} />
          <Route path="/OurStory" element={<Main />} />
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/PaymentCardList" element={<PaymentCardList/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
