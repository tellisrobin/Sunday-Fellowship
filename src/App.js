import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/nav/Header";
import Footer from "./components/nav/footer";


import { Toaster } from "react-hot-toast";

import Home from "./pages/container/Home";
import Team from './pages/container/team'
import ContactUs from './pages/container/contactus'
import WhoWeAre from './pages/container/who_we_are'
import Events from './pages/container/events'




function App() {
  return (
    <BrowserRouter>

      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/events" element={<Events />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;