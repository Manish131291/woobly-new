import "./App.css";
import "../src/core-components/templates/auth-layout/AuthLayout.style.scss";
import Dashboard from "./modules/dashboard/screens/dashboard.screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoodLogin } from "./modules";
import GuestList from "./modules/guest-list/screens/guest-list.screen";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoodLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/guest-list" element={<GuestList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
