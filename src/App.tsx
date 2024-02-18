import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import SingleCarPage from "./pages/SingleCarPage/SingleCarPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { useInitAppData } from "./hooks/useInitAppData";

function App() {
  useInitAppData();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="car/:carID" element={<SingleCarPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
