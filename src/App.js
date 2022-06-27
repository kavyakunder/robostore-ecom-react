// import "./App.css";
import { Toaster } from "react-hot-toast";
import { Navbar, Footer } from "./components/components";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
