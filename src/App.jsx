import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DetailProductPage from "./pages/DetailProductPage";
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectRegisterRoute from "./utils/ProtectRegisterRoute"; // Updated import
import RegisterPages from "./pages/RegisterPages";
import LoginPages from "./pages/LoginPages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailProductPage />} />
        <Route element={<ProtectRegisterRoute />}>
          <Route path="/register" element={<RegisterPages />} />
          <Route path="/login" element={<LoginPages />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
