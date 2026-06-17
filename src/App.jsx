import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import Gdpr from "./pages/Gdpr";
import Loader from "./components/Loader";

function App() {
  return (
    <>
    <Loader />
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sluzby/:slug" element={<ServiceDetail />} />
          <Route path="gdpr" element={<Gdpr />} />
        </Route>
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
