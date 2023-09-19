import { Link, Routes, Route, RouterProvider, Navigate } from "react-router-dom";
import Sandbox from "./pages/Sandbox/Sandbox";
import Header from "./components/Header/Header";
import ExamplesPage from "./pages/ExamplesPage/ExamplesPage";

import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Header/>
      <div className="pages">
      <Routes>
        <Route path='/' element={<Navigate to="/examples" />} />
        <Route path="/examples/:id" element={<Sandbox isExample={{ isExample: true }} />} />
        <Route path='/rating-test' element={<Navigate to="/examples" />} />
        <Route path='/sandbox' element={<Sandbox/>} />
        <Route path='/examples' element={<ExamplesPage />} />
      </Routes>
      </div>
    </div>
  );
}
