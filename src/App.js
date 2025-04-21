import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />  {/* This will appear on every page */}
      </header>
      <main>
        <Outlet />  {/* Child routes will render here */}
      </main>
    </>
  );
}

export default App;
