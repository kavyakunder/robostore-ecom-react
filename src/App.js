import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/components";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Toaster />
    </div>
  );
}

export default App;
