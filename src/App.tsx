import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./index.css";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import Profile from "./pages/Profile";


function App() {
  const [newAccountData, setNewAccountData] = useState<AccountData>({
    Fullname: "",
    Phonenumber: "",
    Email: "",
    Password: "",
    Companyname: "",
    isAgency: true,
  });
  

  return (
    <div className="h-[100vh] flex justify-center items-center overflow-hidden">
      <main className="h-full w-[20.8%] bg-gray-50 overflow-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/Createaccount"
              element={
                <CreateAccountPage
                  newAccountData={newAccountData}
                  setNewAccountData={setNewAccountData}
                />
              }
            />
            <Route path="/Login" element={<LoginPage />} />
            <Route
              path="/Profile"
              element={<Profile newAccountData={newAccountData} />}
            />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
