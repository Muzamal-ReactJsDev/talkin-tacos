import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Productds from "./Components/Products/Products";
import Navbar from "./Components/Navbar/NavBar";
import Main from "./Components/OurStory/main";
import Payment from "./Components/Payment/Payment.js";
import PaymentCardList from "./Components/Payment/PaymentCardList";
import PlaceOrder from "./Components/Payment/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import AddAddress from "./Components/Payment/AddAddres";
import ShowAddAddress from "./Components/Payment/ShowAddAddress";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Products" element={<Productds />} />
          <Route path="/OurStory" element={<Main />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/PaymentCardList" element={<PaymentCardList />} />
          <Route path="/AddAddress" element={<AddAddress />} />
          <Route path="/ShowAddAddress" element={<ShowAddAddress />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
