import NavBar from "./components/coman/NavBar";
import Propos from "./components/Sections/Propos";
import Footer from "./components/coman/Footer";
import Acceuil from "./components/Sections/Acceuil";
import Form from "./components/Sections/Form";
import Register from "./components/Sections/Register";
import Login from "./components/Sections/Login";
import Layout from "./components/Sections/Layout";
import ConfirmCoach from "./components/Sections/ConfirmCoach";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Confirm from "./components/Sections/EmailConfirmation";
import RequirdAuth from "./components/Sections/RequireAuth";
import Profile from "./components/Sections/Profile";

import EditProfile from "./components/Sections/EditProfile";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Acceuil />}></Route>
          <Route path="/propos" element={<Propos />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login/:userToken" element={<Login />}></Route>
          <Route path="/confirm" element={<Confirm />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/editprofile/:id" element={<EditProfile />}></Route>
          <Route path="/confirmcoach" element={<ConfirmCoach />}></Route>
          <Route path="/logout" element={<Acceuil />}></Route>

          <Route element={<RequirdAuth />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
