import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Navbarbottom from "./components/Navbarbottom";

function App() {
  return (
    <div className="">
      <header className="bg-gray-800 px-5">
        <Navbar />
      </header>
      <div className="px-6 mt-5">
        <Navbarbottom />
      </div>
      <main className="px-5 mt-10 overflow-hidden container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
