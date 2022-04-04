import "./App.css";

import Navbar from "./components/Navbar/navbar";
import Landing from "./pages/Home/landingPage";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
