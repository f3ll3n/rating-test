import {
  Link,
  Routes,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Sandbox from "./pages/Sandbox/Sandbox";
import Header from "./components/Header/Header";
import ExamplesPage from "./pages/ExamplesPage/ExamplesPage";
import { Container } from "@mui/material";

import "./App.css";
export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" className="App">
        <div className="pages">
          <Routes>
            <Route path="/" element={<Navigate to="/examples" />} />
            <Route
              path="/examples/:id"
              element={<Sandbox isExample={{ isExample: true }} />}
            />
            <Route path="/rating-test" element={<Navigate to="/examples" />} />
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/examples" element={<ExamplesPage />} />
          </Routes>
        </div>
      </Container>
    </>
  );
}
