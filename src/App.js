import "./App.css";
import Landing from "./pages/Home/landingPage";
import { Navbar, Footer } from "./components/components";
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
